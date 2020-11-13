import React from 'react';
import { StyleSheet, Text, View,Button ,StatusBar, } from 'react-native';
import { useTheme } from '@react-navigation/native';

function HomeScreen({navigation}) {
  const { colors } = useTheme();

  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <StatusBar translucent={true} backgroundColor={'transparent'}  /> 
        <Text style={{color: colors.text}}>Home Screen</Text>
        <Button title="go to details screen" 
        onPress={()=> navigation.navigate('Details')} />
      </View>
    );
  }


  export default HomeScreen;