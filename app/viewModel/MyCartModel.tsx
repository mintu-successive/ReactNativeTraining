import React, {useEffect, useState} from 'react';
import {dummyData} from '../config/Constants';
import {MyCartData} from '../Models';
import MyCartScreen from '../view/MyCartScreen';
import {useSelector, useDispatch} from 'react-redux';
import {setMyCartList} from '../redux/actions';
import {useFocusEffect} from '@react-navigation/native';

const MyCartModel = ({navigation}: any) => {
  const list = useSelector((state: any) => state.setMyCartList.list);
  const total = useSelector((state: any) => state.setMyCartList.total);
  const dispatch = useDispatch();

  return <MyCartScreen navigation={navigation} data={list} total={total} />;
};

export default MyCartModel;
