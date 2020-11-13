import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import {   NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View,Button,ActivityIndicator } from 'react-native';
import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import RootStackScreen from './screens/RootStackScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './screens/DrawerContent';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Drawer = createDrawerNavigator();
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme  
} from 'react-native-paper';




var type,userToken;
export default function App() {
  //    const [isLoading, setIsLoading] = React.useState(true);
  //  const [userToken, setUserToken] = React.useState(null); 

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);


  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

   const authContext=React.useMemo(()=>({
     signIn:async (foundUser) =>{
      //   setUserToken('fgkj');
      //  setIsLoading(false);
  
     const userToken=String(foundUser[0].userToken);
     const username=foundUser[0].username;
   
        try{
         
          await AsyncStorage.setItem('userToken',userToken)
        }
        catch(e){
          console.log(e)
        }
    
      dispatch({type:'LOGIN',id:username,token:userToken})
     },
     signOut:async()=>{
     
      try{
       
        await AsyncStorage.removeItem('userToken')
      }
      catch(e){
        console.log(e)
      }
      dispatch({type:'LOGIN'})
      //    setUserToken(null);
      //  setIsLoading(false);
      dispatch({type:'LOGOUT'})
     },
     signUp: () => {
       setUserToken('fgkj');
       setIsLoading(false);
    },
    toggleTheme:()=>{

      setIsDarkTheme(isDarkTheme=> !isDarkTheme )
    }
   }))

   useEffect(()=>{
     setTimeout(async()=>{
      //  setIsLoading(false);
      let userToken=null;
      try{
        userToken = await AsyncStorage.getItem('userToken')
      }
      catch(e){
        console.log(e)
      }
      dispatch({type:'RETRIEVE_TOKEN',token:userToken})
     },1000)
   },[])
   if(loginState.isLoading) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator color="#0000ff" size="large"/>
     
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={theme}>
        {loginState.userToken  !== null ? (<Drawer.Navigator 
           drawerContent={props=> <DrawerContent {...props} /> }
           headerMode='none'
           screenOptions={{
             header:()=>(null)
           }}
   
          >
         
           <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator>):<RootStackScreen />}
 
      
      </NavigationContainer>
      </AuthContext.Provider>
      </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },

});
