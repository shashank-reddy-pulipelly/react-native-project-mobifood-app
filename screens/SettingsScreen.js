import React from 'react';
import { View,Text, StyleSheet,StatusBar,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'react-native-paper';
const SettingStack = createStackNavigator();
const SettingScreen = () => {
  const {colors} = useTheme();
 
    return (

      <View style={styles.container}>
                  <StatusBar translucent={true} backgroundColor={'transparent'} />
                                 
                
      
       <TouchableOpacity style={styles.menuItem} onPress={()=>{}} >
   
       <Icon name="account-settings" color={colors.text} size={30}/>
       <Text style={[styles.menuItemText,{
         color:colors.text
       }]}>Account Settings</Text>
<View style={styles.ford} >
     <FontAwesome name="angle-right" color={colors.text} size={30} />
   </View>
       </TouchableOpacity>
       <TouchableOpacity style={styles.menuItem}>
   
       <FontAwesome name="credit-card" color={colors.text} size={24} />
   <Text style={[styles.menuItemText,{
     color:colors.text
   }]}>Payment</Text>
<View style={styles.ford} >
     <FontAwesome name="angle-right" color={colors.text} size={30} />
   </View>
   </TouchableOpacity>
   <TouchableOpacity style={styles.menuItem}>
   
   <FontAwesome name="bell" color={colors.text} size={25} />
   <Text style={[styles.menuItemText,{
     color:colors.text
   }]}>Notifications</Text>
<View style={styles.ford} >
     <FontAwesome name="angle-right" color={colors.text} size={30} />
   </View>
   </TouchableOpacity>
   <TouchableOpacity style={styles.menuItem}>
   
   <Icon name="security" color={colors.text} size={30}/>
   <Text style={[styles.menuItemText,{
     color:colors.text
   }]}>Privacy</Text>
<View style={styles.ford} >
     <FontAwesome name="angle-right" color={colors.text} size={30} />
   </View>
   </TouchableOpacity>
   <TouchableOpacity style={styles.menuItem}>
   <FontAwesome name="language" color={colors.text} size={30} />
   <Text style={[styles.menuItemText,{
     color:colors.text
   }]}>Language</Text>
     <View style={styles.ford} >
     <FontAwesome name="angle-right" color={colors.text} size={30} />
   </View>
 

   </TouchableOpacity>
   <TouchableOpacity style={styles.menuItem}>
   <FontAwesome name="universal-access" color={colors.text} size={30} />
   
   <Text style={[styles.menuItemText,{
     color:colors.text
   }]}>Accessibility</Text>
<View style={styles.ford} >
     <FontAwesome name="angle-right" color={colors.text} size={30} />
   </View>
   </TouchableOpacity>
       
   <TouchableOpacity style={styles.menuItem}>
   
   <Icon name="message-settings" color={colors.text} size={30}/>
   <Text style={[styles.menuItemText,{
     color:colors.text
   }]}>Chat Settings</Text>
<View style={styles.ford} >
     <FontAwesome name="angle-right" color={colors.text} size={30} />
   </View>
   </TouchableOpacity>
   <TouchableOpacity style={styles.menuItem}>
   
   <FontAwesome name="lock" color={colors.text} size={30} />
   <Text style={[styles.menuItemText,{
     color:colors.text
   }]}> App Lock</Text>
<View style={styles.ford} >
     <FontAwesome name="angle-right" color={colors.text} size={30} />
   </View>
   </TouchableOpacity>
   <TouchableOpacity style={styles.menuItem}>
   
   <FontAwesome name="sign-in" color={colors.text} size={30} />
   <Text style={[styles.menuItemText,{
     color:colors.text
   }]}>Login Activity</Text>
<View style={styles.ford} >
     <FontAwesome name="angle-right" color={colors.text} size={30} />
   </View>
   </TouchableOpacity>
 
            
      </View>
    );
};

const SettingStackScreen = (props) => (
  <SettingStack.Navigator
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
    <SettingStack.Screen
      name="Settings"
      component={SettingScreen}
      options={{
        headerLeft: () => (
          <View style={{
            marginLeft:20,
          
            justifyContent:'center'
          }}>
        <FontAwesome.Button name='angle-left' style={{
           paddingRight:2
          }} size={25}  backgroundColor="#F44336"
          onPress={()=>props.navigation.navigate('Home')} ></FontAwesome.Button>
          </View>
        ),
      }}
    />
  </SettingStack.Navigator>
);

export default SettingStackScreen ;

const styles = StyleSheet.create({
  container: {
    flex: 1, 


  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomWidth:1,
    borderBottomColor:'#dddddd'
  },
  menuItemText: {
 
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26,
  },
  ford:{
    marginLeft:'auto'
  }
});