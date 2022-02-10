import React, {useState} from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {icons} from '../../config/Constants';
import styles from './style';

const PasswordInputText = ({
  onChangeText,
  value,
  placeHolder,
}: any) => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeHolder}
        secureTextEntry={visible}
      />
      <TouchableOpacity
        onPress={() => {
          setVisible(!visible);
        }}
        style={styles.buttonContainer}>
        <Image style={styles.icon} source={visible? icons.eye : icons.eye_close} />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInputText;
