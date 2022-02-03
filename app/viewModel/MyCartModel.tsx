import React from 'react';
import MyCartScreen from '../view/MyCartScreen';

interface InputProp {
  navigation: any;
}

const MyCartModel = (props: InputProp) => {
  const {navigation} = props;
  return <MyCartScreen navigation={navigation} />;
};

export default MyCartModel;
