import React from 'react';
import {Image, Text, View} from 'react-native';
import {CustomButton} from '../../components';
import {images} from '../../config/Constants';
import styles from './style';

interface InputProp {
  navigation: any;
}

const PaymentSuccessScreen = (props: InputProp) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.successContainer}>
        <Image style={styles.successImage} source={images.success} />
        <Text style={styles.congratsText}>Congratulations!</Text>
        <Text style={styles.messageText}>Payment was successfully made!</Text>
      </View>
      <View style={styles.customButtonContainer}>
        <CustomButton
          style={styles.customButton}
          onPress={() => {
            navigation.navigate('Drawer');
          }}
          text="Done"
        />
      </View>
    </View>
  );
};

export default PaymentSuccessScreen;
