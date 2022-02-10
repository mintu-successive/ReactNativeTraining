import React from 'react';
import {View, Image, Text} from 'react-native';
import {icons} from '../../config/Constants';
import styles from './style';

const RenderItem = ({item, index}: any) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemSubContainer}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={item.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.offerTitleText}>{item.title}</Text>
          <Text style={styles.offerDescText}>{item.desc}</Text>
          <Text style={styles.offerTimeText}>{item.time}</Text>
        </View>
      </View>
      <Image style={styles.option} source={icons.option} />
    </View>
  );
};

export default RenderItem;
