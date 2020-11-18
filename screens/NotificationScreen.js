import React, { useState } from 'react';
import { FlatList, View, Text,Alert,StyleSheet  } from 'react-native';

import { List } from 'react-native-paper';
import Swipeout from 'react-native-swipeout';

import * as Animatable from 'react-native-animatable';

import Notifications from '../model/Notifications';

import {useTheme} from 'react-native-paper';
 
 const NotificationScreen = () =>  {
  const {colors} = useTheme();


    const [listData, setListData] = useState(
        Notifications.map((NotificationItem, index) => ({
          key: `${index}`,
          title: NotificationItem.title,
          details: NotificationItem.details,
        })),
      );

    const del = (key) => {
      const arr=listData.filter(item=>item.key!==key);
      setListData(arr);
    }

  

        
        const renderMenuItem = ({item}) => {
            const rightButton = [
                {
                  style:{   backgroundColor:'#fff'},
                    text: 'Delete', 
                    type: 'delete',
                    onPress: () => {
                        Alert.alert(
                            'Delete notification?',
                            'Are you sure you wish to delete notification ' + item.title + '?',
                            [
                                { 
                                    text: 'Cancel', 
                                    onPress: () => console.log(item.title + ' Not Deleted'),
                                    style: ' cancel'
                                },
                                {
                                    text: 'OK',
                                    onPress: () => {del(item.key)}
                                }
                            ]
                            
                        );
                        
                    }                
                }
            ]
            return (
                <Swipeout right={rightButton} autoClose={true}>
                    <Animatable.View animation="fadeInRightBig" duration={1000}> 
                    <List.Item
                 title={item.title}
            description={item.details}
            style={[
              styles.list,
              {
                backgroundColor: colors.background,
              },
            ]}
            key={item.key}
            titleStyle={
              {
                color:colors.text
              }
            }
           
                />
                       </Animatable.View>
            </Swipeout>
            );
        };
         

   
        
            return (
                <FlatList 
                    data={listData}
                    renderItem={renderMenuItem}
                 
                    />
            );
       
    
}


export default NotificationScreen;

const styles=StyleSheet.create({

  list:{
    backgroundColor:'#fff',
    borderBottomWidth: 1,
    borderColor:'#BDBDBD'
  }
})