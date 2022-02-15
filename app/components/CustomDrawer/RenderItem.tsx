import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Image, Text} from 'react-native-animatable';
import {COLORS} from '../../config/Constants';
import styles from './style';

const RenderItem = ({item, index, navigation}: any) => {
  return (
    <TouchableOpacity
    disabled={(item.route!='')?false:true}
    onPress={()=>{(item.route!='')?navigation.navigate(item.route):null}}
      style={[
        styles.itemContainer,
        index == 0 ? {backgroundColor: COLORS.transparentBlack1} : null,
        index == 4? { borderTopWidth: 1, borderTopColor: COLORS.white}:null
      ]}>
      <Image style={styles.itemImage} source={item.icon} />
      <Text style={styles.itemText}>{item.label}</Text>
    </TouchableOpacity>
  );
};

export default RenderItem;
