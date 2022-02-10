import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CustomButton, Header, PasswordInputText} from '../../components';
import {icons} from '../../config/Constants';
import styles from './style';

interface InputProp {
  navigation: any;
}

const ChangePasswordScreen = (props: InputProp) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Header
        title="CHANGE PASSWORD"
        leftIcon={icons.back}
        leftOnPress={() => {}}
      />

      <View style={styles.subContainer}>
        <Text style={styles.labelText}>Current Password</Text>
        <PasswordInputText />
        <Text style={styles.labelText}>New Password</Text>
        <PasswordInputText />
        <Text style={styles.labelText}>Retype New Password</Text>
        <PasswordInputText />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton text="Change Password" onPress={()=>{}} />
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
