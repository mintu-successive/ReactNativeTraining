import React, { useState } from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './style';

const Switch = ({on}: any) => {
  const [isOn, setIsOn] = useState(on)
  return (
    <TouchableOpacity 
    onPress={()=>setIsOn(!isOn)}
    style={isOn ? styles.container : styles.notSelectedContainer}>
      <View style={styles.subContainer}>
        <View
          style={isOn ? styles.dot : styles.notSelectedDot}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Switch;
