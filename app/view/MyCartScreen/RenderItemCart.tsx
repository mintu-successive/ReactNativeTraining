import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {icons} from '../../config/Constants';
import styles from './style';

const RenderItemCart = ({item, index}: any) => {
  return (
    <View style={styles.renderItemButtonContainer}>
      <View style={styles.subContainer}>
        <Image style={styles.renderItemImage} source={item.image} />
        <View>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.priceText}>${item.price}</Text>
        </View>
      </View>

      <View style={styles.quantityButtonContainer}>
        <TouchableOpacity>
          <Image style={styles.quantityImage} source={icons.minus} />
        </TouchableOpacity>
        <Text style={styles.quantityText}>1</Text>
        <TouchableOpacity>
          <Image style={styles.quantityImage} source={icons.plus} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenderItemCart;
