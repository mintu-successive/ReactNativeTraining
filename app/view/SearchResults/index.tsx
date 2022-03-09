import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {HomeMap, RouteMap, UberTypes} from '../../components';
import styles from './style';

interface InputProp {
  navigation: any;
}

const SearchResultsScreen = (props: InputProp) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContaiiner}>
        <View style={styles.homeMapContainer}>
          <RouteMap />
        </View>
        <View style={styles.typeContainer}>
          <UberTypes />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchResultsScreen;
