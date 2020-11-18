import React from 'react';
import { View, Text, StyleSheet,StatusBar,TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';
const SupportStack = createStackNavigator();
import { Card} from 'react-native-elements';
import {useTheme} from 'react-native-paper';

const SupportScreen = () => {
  const { colors } = useTheme();
  
  const sendMail=()=> {
    MailComposer.composeAsync({
        recipients: ['confusion@food.net'],
        subject: 'Enquiry',
        body: 'To whom it may concern:'
    })
}
    return (
      <View style={styles.container}>
                  <StatusBar translucent={true} backgroundColor={'transparent'} />
                  <Animatable.View  animation="fadeInDown" duration={1000} delay={100}>                
                <Card containerStyle={[styles.card,{ backgroundColor:colors.background}]} >

            
             
             <View style={{
               color:colors.text,
               backgroundColor:colors.background
             }} >
               <Text style={[styles.text,{
                 color:colors.text
               }]}>Contact Information</Text>
               <Text  style={{margin: 10,color:colors.text}}>121, Clear Water Bay Road</Text>
               <Text  style={{margin: 10,color:colors.text}}>Clear Water Bay, Kowloon</Text>
               <Text  style={{margin: 10,color:colors.text}}>TelanganaHyderabad,India</Text>
               <Text  style={{margin: 10,color:colors.text}}> Tel:  +91 9533156114</Text>
               <Text  style={{margin: 10,color:colors.text}}> Fax : +852 8765 4321</Text>
               <Text  style={{margin: 10,color:colors.text}}> Email: shashankreddykumar@gmail.com</Text>
               
                          <TouchableOpacity style={styles.commandButton} onPress={() => sendMail()}>
          <Text style={styles.panelButtonTitle}>Send Mail</Text>
        </TouchableOpacity>
               </View>
<View>
  
</View>
               </Card>
                    </Animatable.View>
                    <Animatable.Image  animation="bounceIn"
                duraton="1500" style={styles.image}  source={require('../assets/logo.png')}>

  </Animatable.Image >
      </View>
    );
};

const SupportStackScreen = ({navigation}) => (
  <SupportStack.Navigator
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
    <SupportStack.Screen
      name="Our Support"
      component={SupportScreen}
      options={{
        headerLeft: () => (
          <View style={{
            marginLeft:20,
          
            justifyContent:'center'
          }}>
        <Icon.Button name='ios-arrow-back' style={{
           paddingRight:2
          }} size={25}  backgroundColor="#F44336"
          onPress={()=>navigation.navigate('Home')} ></Icon.Button>
          </View>
        ),
      }}
    />
  </SupportStack.Navigator>
);

export default SupportStackScreen ;

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
    marginHorizontal:40
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  
  },
  image:{
    width:200,
    height:200,
    opacity:0.5,
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
paddingLeft:70,
paddingBottom:5,
borderBottomWidth:1,
borderBottomColor:'#666666'
  }
});