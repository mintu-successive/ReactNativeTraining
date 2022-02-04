import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {CustomButton, CustomTextInput, Header} from '../../components';
import {
  icons,
  images,
  dummyData,
  COLORS,
  constants,
} from '../../config/Constants';
import styles from './style';

interface InputProp {
  navigation: any;
}

const AddNewCardScreen = (props: InputProp) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Header title="ADD NEW CARD" leftIcon={icons.back} />
      <View style={{flex: 0.9}}>
        <ImageBackground style={styles.imageBackground} source={images.card}>
          <Image style={styles.cardImage} source={dummyData.allCards[0].icon} />
          <Text style={styles.cardNameText}>ByProgrammers</Text>
          <Text style={styles.cardNumberText}>1234123412341234</Text>
          <Text style={styles.cardExpiryText}>10/25</Text>
        </ImageBackground>

        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Card Number</Text>
            <CustomTextInput
              keyboardType="number-pad"
              placeHolder="Enter Card Number"
              iconName={constants.CHECK_ICON}
              iconColor={COLORS.gray}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Cardholder Name</Text>
            <CustomTextInput
              keyboardType="default"
              placeHolder="Enter Name"
              iconName={constants.CHECK_ICON}
              iconColor={COLORS.gray}
            />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Expiry Date</Text>
              <CustomTextInput
                style={styles.customInputTextStyle}
                keyboardType="number-pad"
                placeHolder=""
                iconName={constants.CHECK_ICON}
                iconColor={COLORS.gray}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>CVV</Text>
              <CustomTextInput
                style={styles.customInputTextStyle}
                keyboardType="number-pad"
                iconName={constants.CHECK_ICON}
                iconColor={COLORS.gray}
              />
            </View>
          </View>
          <View style={styles.rememberContainer}>
            <Image style={styles.rememberImage} source={icons.check_on} />
            <Text style={styles.rememberText}>Remember this card details</Text>
          </View>
        </ScrollView>
      </View>
      <View style={{flex: 0.1, justifyContent: 'flex-end', marginBottom: 10}}>
        <CustomButton text="Add Card" onPress={() => {}} />
      </View>
    </View>
  );
};

export default AddNewCardScreen;
