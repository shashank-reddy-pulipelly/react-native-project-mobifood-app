import React from 'react';
import { View, Text, Button, StyleSheet,StatusBar } from 'react-native';

const SettingsScreen = () => {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'transparent'}/>
        <Text>Settings Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});