import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Header, Switch} from '../../components';
import {dummyData, icons} from '../../config/Constants';
import styles from './style';

interface InputProp {
  navigation: any;
}

const NotificationScreen = (props: InputProp) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Header
        title="NOTIFICATION"
        leftIcon={icons.back}
        leftOnPress={() => {}}
      />

      {dummyData.notification.map((item, index) => {
        return (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.itemSubContainer}>
              <Image style={styles.itemIcon} source={item.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text>{item.desc}</Text>
              </View>
            </View>
            <Switch on={item.status} />
          </View>
        );
      })}
    </View>
  );
};

export default NotificationScreen;
