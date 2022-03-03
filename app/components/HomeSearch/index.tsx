import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={16} color={'#535353'} />
          <Text>Now</Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={16}
            color={'#535353'}
          />
        </View>
      </View>
      <View style={styles.previousDestinationBox}>
        <View style={styles.iconsContaiiner}>
          <AntDesign name="clockcircle" size={16} color={'#fff'} />
        </View>
        <Text style={styles.destinationText}>Spin NightClub</Text>
      </View>
      <View style={styles.previousDestinationBox}>
        <View style={[styles.iconsContaiiner, {backgroundColor: '#218cff'}]}>
          <Entypo name="home" size={16} color={'#fff'} />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
