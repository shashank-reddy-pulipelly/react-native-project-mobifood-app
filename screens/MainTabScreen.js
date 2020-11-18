

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './homeScreen';

import ProfileScreen from './profileScreen';
import ExploreScreen from './exploreScreen';
import EditProfileScreen from './EditProfileScreen';
import NotificationScreen from './NotificationScreen';
import { View } from 'react-native-animatable';
const HomeStack = createStackNavigator();

import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme, Avatar} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
const ProfileStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const HotelStack=createStackNavigator();
import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails';
import HotelListScreen from './HotelScreen';
import HotelItemDetails from './HotelItemDetails'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainTabScreen=()=>{
    return(
 
        <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#fff"
       
        tabBarOptions={{
        
          activeTintColor: '#F44336',
          inactiveTintColor: '#616161',
          labelStyle:{fontSize:12,
            padding:0,
            margin:0,
            fontWeight:'900',
            fontFamily:'sans-serif'
      },
      tabStyle:{
        margin:0,
        padding:0
      },
  
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
              tabBarColor:'#F44336',
            tabBarLabel: 'Home',
            
            tabBarIcon: ({ color }) => (
              <Icon name="ios-home" color={color} size={26} />
            ),
          }}
        />
                    <Tab.Screen
          name="Hotels"
          component={HotelStackScreen}
          options={{
            tabBarLabel: 'Hotels',
            tabBarColor:'#d02860',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="food" color={color} size={28} />
            ),
          }}
        />
               <Tab.Screen
          name="explore"
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Explore',
            tabBarColor:'#d02860',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-aperture" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationStackScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarColor:'#0000e4',
            
            tabBarIcon: ({ color }) => (
              <Icon name="ios-notifications" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor:'#F44336',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-person" color={color} size={26} />
            ),
          }}
        />
   
      </Tab.Navigator>
    )
}


const HomeStackScreen=({navigation})=>{
  const {colors} = useTheme();
    return (
  <HomeStack.Navigator  screenOptions={{
        headerStyle:{
          backgroundColor:'#F44336',
          height:70,
            
        },
       
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold',
          fontSize:20,
          marginLeft:70
        }
      }
      } >
          <HomeStack.Screen name="Home" component={HomeScreen}
          options={{
            title:'Mobifood',
           
            headerLeft:()=>(
              <View style={{
                marginLeft:20,
              
                justifyContent:'center'
              }}>
            <Icon.Button name='ios-menu' style={{
               paddingRight:2
              }} size={25}  backgroundColor="#F44336"
              onPress={()=>navigation.toggleDrawer()} ></Icon.Button>
              </View>
              
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row', marginRight: 10}}>
                <Icon.Button
                  name="ios-search"
                  size={25}
                  color='#fff'
                  backgroundColor='#F44336'
                  onPress={() => {}}
                />
                <TouchableOpacity
                  style={{paddingHorizontal: 10, marginTop: 5}}
                  onPress={() => {
                    navigation.navigate('Profile');
                  }}>
                  <Avatar.Image
                        source={require('../assets/banners/shashank.jpg')}
                    size={30}
                  />
                </TouchableOpacity>
              </View>
            ),
          }
           
          } />
           <HomeStack.Screen 
        name="CardListScreen"
        component={CardListScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false
        })}
      />
      <HomeStack.Screen 
        name="CardItemDetails"
        component={CardItemDetails}
        options={() => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
          headerStyle: {
            height: 70, // Specify the height of your custom header
          }
        })}
      />
        </HomeStack.Navigator> 
         )
  }
   

  
  const ProfileStackScreen = ({navigation}) => {
    const {colors} = useTheme();
  
    return (
      <ProfileStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:'#F44336',
            shadowColor: colors.background, // iOS
            elevation: 0, // Android
            height:70,
          },
          headerTitleAlign:'center',
          headerTintColor: '#fff',
        }}>
        <ProfileStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <Icon.Button
                  name="ios-menu"
                  size={25}
                  backgroundColor='#F44336'
                  color='#fff'
                  onPress={() => navigation.openDrawer()}
                />
              </View>
            ),
            headerRight: () => (
              <View style={{marginRight: 10}}>
                <MaterialCommunityIcons.Button
                  name="account-edit"
                  size={25}
                  backgroundColor='#F44336'
                  color='#fff'
                  onPress={() => navigation.navigate('EditProfile')}
                />
              </View>
            ),
          }}
        />
        <ProfileStack.Screen
          name="EditProfile"
          options={{
            title: 'Edit Profile',
          }}
          component={EditProfileScreen}
        />
      </ProfileStack.Navigator>
    );
  };

  const NotificationStackScreen = ({navigation}) => (
    <NotificationStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F44336',
          height:70
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          marginLeft:60
        },
      }}>
      <NotificationStack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          headerLeft: () => (
            <View style={{
              marginLeft:20,
            
              justifyContent:'center'
            }}>
          <Icon.Button name='ios-menu' style={{
             paddingRight:2
            }} size={25}  backgroundColor="#F44336"
            onPress={()=>navigation.toggleDrawer()} ></Icon.Button>
            </View>
          ),
        }}
      />
    </NotificationStack.Navigator>
  );

  
  const HotelStackScreen = ({navigation}) => (
    <HotelStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F44336',
          height:70
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          marginLeft:80
        },
      }}>
      <HotelStack.Screen
        name="Hotels"
        component={HotelListScreen}
        options={{
          headerLeft: () => (
            <View style={{
              marginLeft:20,
            
              justifyContent:'center'
            }}>
          <Icon.Button name='ios-menu' style={{
             paddingRight:2
            }} size={25}  backgroundColor="#F44336"
            onPress={()=>navigation.toggleDrawer()} ></Icon.Button>
            </View>
          ),
        }}
      />
            <HotelStack.Screen 
        name="HotelItemDetails"
        component={HotelItemDetails}
        options={() => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
          headerStyle: {
            height: 70, // Specify the height of your custom header
          }
        })}
      />
    </HotelStack.Navigator>
  );
  export default MainTabScreen;