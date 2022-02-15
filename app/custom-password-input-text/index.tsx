import React, {useState} from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';

const MGPasswordInputText = ({
  onChangeText,
  value,
  placeHolder,
  style,
}: any) => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={[style, styles.container]}>
      <TextInput
        style={styles.inputText}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeHolder}
        secureTextEntry={visible}
        placeholderTextColor="gray"
      />
      <TouchableOpacity
        onPress={() => {
          setVisible(!visible);
        }}
        style={styles.buttonContainer}>
        <Image
          style={styles.icon}
          source={
            visible
              ? require('./icons/eye.png')
              : require('./icons/eye_close.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default MGPasswordInputText;
