import React, {useEffect, useState} from 'react';
import HomeScreen from '../view/homeScreen';
import {FetchHomeData} from '../controllers';

interface InputProp {
  navigation: any;
}

const HomeModel = (props: InputProp) => {
  const {navigation} = props;

  useEffect(() => {}, []);
  return <HomeScreen navigation={navigation}/>;
};

export default HomeModel;
