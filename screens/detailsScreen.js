import React from 'react';
import { StyleSheet, Text, View,Button ,StatusBar} from 'react-native';
import { useTheme } from '@react-navigation/native';
function DetailsScreen({navigation}) {
  const { colors } = useTheme();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<StatusBar translucent={true} backgroundColor={'transparent'} />
        <Text style={{color: colors.text}}>Details Screen</Text>
        
        <Button title="go back" 
        onPress={()=> navigation.navigate('Home')} />
      </View>
    );
  }


  export default DetailsScreen;