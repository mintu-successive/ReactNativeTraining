import React from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './style';

interface InputProp {
  navigation: any;
  fromText: string;
  whereText: string;
  originPlace: any;
  destinationPlace: any;
  setFromText: (text: string) => void;
  setWhereText: (text: string) => void;
  setOriginPlace: (data: any) => void;
  setDestinationPlace: (data: any) => void;
}

const DestinationSearchScreen = (props: InputProp) => {
  const {
    navigation,
    fromText,
    whereText,
    originPlace,
    destinationPlace,
    setFromText,
    setWhereText,
    setOriginPlace,
    setDestinationPlace,
  } = props;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          styles={{textInput: styles.whereTextInput}}
          fetchDetails
          query={{
            key: 'AIzaSyD907Ej8YHUdjWWqhkW76sT-ALJzU0btqY',
            language: 'en',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          styles={{textInput: styles.whereTextInput}}
          fetchDetails
          query={{
            key: 'AIzaSyD907Ej8YHUdjWWqhkW76sT-ALJzU0btqY',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearchScreen;
