import React from 'react';
import {Image, Text, View} from 'react-native';
import {images} from '../../config';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getImage } from '../../common/utils';

const UberTypeRow = ({item}: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={getImage(item.type)} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {item.type} <Ionicons name="person" size={17} />3
        </Text>
        <Text style={styles.time}>8:03 PM drop off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" size={18} color="#42d742" />
        <Text style={styles.priceText}>est. ${item.price}</Text>
      </View>
    </View>
  );

  // function getImage() {
  //   switch (item.type) {
  //     case 'Comfort':
  //       return images.comfort;
  //     case 'UberXL':
  //       return images.uberXL;
  //     default:
  //       return images.uberX;
  //   }
  // }
};

export default UberTypeRow;
