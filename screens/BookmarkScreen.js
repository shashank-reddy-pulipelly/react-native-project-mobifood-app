








import React from 'react';
import { View, Text, Button, StyleSheet,StatusBar,TouchableOpacity, Image  } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';

const BookmarkStack = createStackNavigator();

import {useTheme} from 'react-native-paper';

const BookmarkScreen = (props) => {
  const { colors } = useTheme();
  
    return (
      <View style={{
        color:colors.text,
        backgroundColor:colors.background
      }} >
         <Animatable.Image  animation="bounceIn"
                duraton="1500" style={styles.image}  source={require('../assets/logo.png')}>

  </Animatable.Image >
                  <StatusBar translucent={true} backgroundColor={'transparent'} />
                           
               

            
             
             <View style={{
               color:colors.text,
               backgroundColor:colors.background
             }} >
              
              <Text style={[styles.text,{
                 color:colors.text
               }]}>Your Cart is Empty</Text>
               
               <Text  style={{margin: 10,marginLeft:120,fontSize:15,color:'#666666'}}> Add items to it now</Text>
              
               
                          <TouchableOpacity style={styles.commandButton} onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.panelButtonTitle}>Order Now</Text>
        </TouchableOpacity>
               </View>
<View>
  
</View>
           
                 
                   
      </View>
    );
};

const BookmarkStackScreen = (props) => (
  <BookmarkStack.Navigator
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
    <BookmarkStack.Screen
      name="My cart"
      component={props=> <BookmarkScreen {...props} /> }
      
      options={{
        headerLeft: () => (
          <View style={{
            marginLeft:20,
          
            justifyContent:'center'
          }}>
        <Icon.Button name='ios-arrow-back' style={{
           paddingRight:2
          }} size={25}  backgroundColor="#F44336"
          onPress={()=>props.navigation.navigate('Home')} ></Icon.Button>
          </View>
        ),
      }}
    />
  </BookmarkStack.Navigator>
);



const styles = StyleSheet.create({
  container: {
    flex: 1, 

  },
  commandButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal:80
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  
  },
  image:{
    width:200,
    height:200,
    opacity:0.89,
    marginTop:30,
    alignSelf:'center'
  },
  card:{
    borderRadius: 10,
   backgroundColor:'red',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity:1,
    shadowRadius: 5,
    elevation: 9,
    padding:10
  },
  text:{
    fontSize:20,
paddingLeft:102,

marginTop:40


  }
});

export default BookmarkStackScreen;