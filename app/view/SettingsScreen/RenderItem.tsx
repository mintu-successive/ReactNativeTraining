import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {constants} from '../../config/Constants';
import styles from './style';

const RenderItem = ({item, index, navigation}: any) => {
  return (
    <TouchableOpacity
      disabled={item.navigate != '' ? true : false}
      onPress={() => {
        item.navigate != '' ? navigation.navigate(item.navigate) : null;
      }}
      style={styles.itemContainer}>
      <View style={styles.subItemContainer}>
        <Image style={styles.itemIcon} source={item.icon} />
        <Text style={styles.nameText}>{item.name}</Text>
      </View>
      {index != constants.settings.length - 1 && (
        <View style={styles.divider} />
      )}
    </TouchableOpacity>
  );
};

export default RenderItem;
