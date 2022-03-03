import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Travel only if necessary
      </Text>
      <Text style={styles.messageText}>Travel If necessary Travel If necessary Travel If necessary Travel If necessary Travel If necessary Travel If necessary</Text>
      <Text style={styles.learnMoreText}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;
