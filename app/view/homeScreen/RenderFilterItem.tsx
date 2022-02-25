import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, icons} from '../../config/Constants';
import styles from './style';

const RenderFilterItem = ({item, index}: any) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.renderFilterContainer}>
      <View style={styles.caloriesContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={icons.calories} style={styles.calorieImage} />
          <Text
            style={{
              color: COLORS.gray,
            }}>
            {item.calories} Calories
          </Text>
        </View>
        <TouchableOpacity>
          <Image source={icons.love} style={styles.loveImage} />
        </TouchableOpacity>
      </View>

      <Image source={item.image} style={styles.renderMainFoodImage} />

      <Text style={styles.renderMainNameText}>{item.name}</Text>
      <Text style={styles.renderMainDescText}>{item.description}</Text>
      <Text style={styles.renderMainPriceText}>{'$'.concat(item.price)}</Text>
    </TouchableOpacity>
  );
};

export default RenderFilterItem;
