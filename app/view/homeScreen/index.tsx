import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CovidMessage, HomeMap, HomeSearch} from '../../components';
import styles from './style';

interface InputProp {
  navigation: any;
}

const HomeScreen = (props: InputProp) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
