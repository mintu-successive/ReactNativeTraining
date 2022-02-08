import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';

const RenderItem = ({item}: any) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.subContainer}>
        <Image style={styles.iconImage} source={item.image} />
        <View style={styles.divider}/>
        <View>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.discountText}>{item.discount}</Text>
            <Text style={styles.nameText}>{item.validity}</Text>
        </View>
      </View>
    </View>
  );
};

export default RenderItem;
