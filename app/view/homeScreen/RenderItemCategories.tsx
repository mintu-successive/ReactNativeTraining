import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../config/Constants';
import styles from './style';

const RenderItemCategories = ({item, clickedItem, selectedCategory}: any) => {
  return (
    <TouchableOpacity
      onPress={() => clickedItem(item)}
      style={[
        item.id == selectedCategory
          ? {
              backgroundColor: COLORS.primary,
            }
          : {
              backgroundColor: COLORS.lightGray1,
            },
        styles.categoriesItemContainer,
      ]}>
      <Image style={styles.categoriesImage} source={item.icon} />
      <Text
        style={[
          item.id == selectedCategory
            ? {
                color: COLORS.white,
              }
            : {
                color: COLORS.gray,
              },
          styles.categoriesText,
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default RenderItemCategories
