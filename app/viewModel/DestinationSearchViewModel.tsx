import React from 'react';
import DestinationSearchScreen from '../view/DestinationSearch';
import ProfileScreen from '../view/profileScreen/profileScreen';

interface InputProp {
  navigation: any;
}

const DestinationSearchViewModel = (props: InputProp) => {
  const {navigation} = props;
  return <DestinationSearchScreen navigation={navigation} />;
};

export default DestinationSearchViewModel;
