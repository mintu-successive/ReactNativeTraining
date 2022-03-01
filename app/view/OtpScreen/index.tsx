import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {
  CustomButton,
  DescriptionText,
  HeaderLogo,
  TitleText,
} from '../../components';
import styles from './style';

interface InputProp {
  navigation: any;
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  onCode1Change: (code: string) => void;
  onCode2Change: (code: string) => void;
  onCode3Change: (code: string) => void;
  onCode4Change: (code: string) => void;
  onContinuePress: () => void;
}

const OtpScreen = (props: InputProp) => {
  const {
    navigation,
    code1,
    code2,
    code3,
    code4,
    onCode1Change,
    onCode2Change,
    onCode3Change,
    onCode4Change,
    onContinuePress,
  } = props;
  return (
    <View style={styles.container}>
      <HeaderLogo />

      <TitleText
        style={{
          marginTop: 50,
          alignSelf: 'center',
        }}
        text="OTP Authentication"
      />

      <DescriptionText
        style={{
          alignSelf: 'center',
          alignContent: 'center',
          marginHorizontal: 20,
          marginTop: 10,
        }}
        text="An authentication code has been sent to your email !!!"
      />

      <View style={styles.codeInputTextContainer}>
        <TextInput
          style={styles.textInput}
          value={code1}
          onChangeText={code => onCode1Change(code)}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.textInput}
          value={code2}
          onChangeText={code => onCode2Change(code)}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.textInput}
          value={code3}
          onChangeText={code => onCode3Change(code)}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.textInput}
          value={code4}
          onChangeText={code => onCode4Change(code)}
          keyboardType="number-pad"
        />
      </View>

      <TouchableOpacity style={styles.codeNotReceivedContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.notReceivedText}>Didn't receive code?</Text>
          <Text style={styles.resendText}>Resend</Text>
        </View>
      </TouchableOpacity>

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <CustomButton
          text="Continue"
          onPress={() => onContinuePress()}
          style={{marginBottom: 20}}
        />
        <Text
          style={[
            styles.notReceivedText,
            {
              alignSelf: 'center',
            },
          ]}>
          By signing up, you agree to our
        </Text>
        <Text
          style={[
            styles.resendText,
            {
              alignSelf: 'center',
              marginBottom: 10,
            },
          ]}>
          Terms and Conditions
        </Text>
      </View>
    </View>
  );
};

export default OtpScreen;
