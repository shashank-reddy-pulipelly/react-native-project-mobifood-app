
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './homeScreen';
import DetailsScreen from './detailsScreen';
import ProfileScreen from './profileScreen';
import ExploreScreen from './exploreScreen';


import { View } from 'react-native-animatable';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
import Icon from 'react-native-vector-icons/Ionicons';





const MainTabScreen=()=>{
    return(
 
        <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#fff"
   
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
              tabBarColor:'#0000e4',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsStackScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarColor:'#009387',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-notifications" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor:'#694fad',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-person" color={color} size={26} />
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
      </Tab.Navigator>
    )
}


const HomeStackScreen=({navigation})=>{
    return (
  <HomeStack.Navigator  screenOptions={{
        headerStyle:{
          backgroundColor:'#0000e4',
          height:70,
            
        },
        headerTitleAlign:'center',
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold',
          fontSize:20,
        }
      }
      } >
          <HomeStack.Screen name="Home" component={HomeScreen}
          options={{
            title:'Overview',
         
            headerLeft:()=>(
              <View style={{
                marginLeft:20,
              
                justifyContent:'center'
              }}>
            <Icon.Button name='ios-menu' style={{
               paddingRight:2
              }} size={25}  backgroundColor="#0000e4"
              onPress={()=>navigation.toggleDrawer()} ></Icon.Button>
              </View>
              
            )
          }
           
          } />
      
        </HomeStack.Navigator> 
         )
  }
   

  const DetailsStackScreen=({navigation})=>{
    return (
      <DetailsStack.Navigator  screenOptions={{
        headerStyle:{
          backgroundColor:'#009387',
          height:70,    
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center',
        headerTitleStyle:{
          fontWeight:'bold',
          fontSize:20,
         
        }
      }
      } >
             
          <DetailsStack.Screen name="Details" component={DetailsScreen} 
              options={{
                title:'Details',
                headerLeft:()=>(
                  <View style={{
                    marginLeft:20
                  }}>
                <Icon.Button name='ios-menu' style={{
               paddingRight:2
              }} size={25} backgroundColor="#009387"
                  onPress={()=>navigation.toggleDrawer()} ></Icon.Button>
                  </View>
                  
                )
              }
               
              } />
    
        </DetailsStack.Navigator> 
          )
  }



  export default MainTabScreen;