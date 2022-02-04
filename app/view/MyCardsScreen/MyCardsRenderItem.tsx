import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, icons} from '../../config/Constants';
import styles from './style';

const MyCardsRenderItem = ({item, index, selectedCard}: any) => {
  return (
    <TouchableOpacity
      style={
        index != selectedCard
          ? styles.myCardsContainer
          : styles.selectedContainer
      }>
      <View style={styles.subContainer}>
        <View style={styles.itemIconContainer}>
          <Image style={styles.itemIcon} source={item.icon} />
        </View>
        <Text style={styles.nameText}>{item.name}</Text>
      </View>
      <TouchableOpacity>
        {/* {index != selectedCard ?
        <View style={styles.selectionBox} /> : */}
        <Image 
        source={index == selectedCard? icons.check_on : icons.check_off}
        style={styles.selectionBox} 
        />
        {/* } */}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MyCardsRenderItem;
