import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const ExploreScreen = () => {
    return (
      <View style={styles.container}>
      <MapView style={styles.mapStyle} />
    </View>
    );
};

export default ExploreScreen;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: 400,
  },
});