import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {constants, types} from '../../config';
import UberTypeRow from '../UberTypeRow';
import styles from './styles';

const UberTypes = () => {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View style={styles.container}>
      {types.map((item, index) => {
        return <UberTypeRow key={index} item={item} />;
      })}
      <Pressable onPress={confirm} style={styles.confirmButton}>
        <Text style={styles.confirmText}>{constants.CONFIRM_UBER}</Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
