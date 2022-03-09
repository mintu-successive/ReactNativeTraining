import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CovidMessage, HomeMap, HomeSearch} from '../../components';
import styles from './style';

interface InputProp {
  navigation: any;
}

const HomeScreen = (props: InputProp) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.homeMapContainer}>
        <HomeMap />
      </View>
      <View style={styles.searchContainer}>
        <CovidMessage />
        <HomeSearch />
      </View>
    </View>
  );
};

export default HomeScreen;
