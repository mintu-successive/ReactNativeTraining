import React, {useEffect, useState} from 'react';
import {dummyData} from '../config/Constants';
import {MyCartData} from '../Models';
import MyCartScreen from '../view/MyCartScreen';
import {useSelector, useDispatch} from 'react-redux';
import {setMyCartList} from '../redux/actions';
import {useFocusEffect} from '@react-navigation/native';

const MyCartModel = ({navigation}: any) => {
  // const [total, setTotal] = useState(0);
  const list = useSelector((state: any) => state.setMyCartList.list);
  const total = useSelector((state: any) => state.setMyCartList.total);
  const dispatch = useDispatch();

  // const calculatePrice = (item: MyCartData) => {
  //   let total = 0;
  //   total = total + item.qty * item.price;
  //   console.log(total);
  //   return total;
  // };

  useEffect(() => {
    // dummyData.myCart.forEach((item, index) => {
    //   dispatch(setMyCartList('ADD', index, item));
    // });
    setTimeout(() => {
      // list.forEach((item: MyCartData) => {
      //   setTotal(total + item.qty * item.price);
      // });
      // for (let index = 0; index < list.length; index++) {
      //   const element = list[index];
      //   setTotal(total+(element.qty*element.price))
      //   console.log(total)
      // }
    }, 500);
  }, [list]);

  // useFocusEffect(()=>{
  //   return ()=>{
  //     setTotal(0)
  //   }
  // })

  return <MyCartScreen navigation={navigation} data={list} total={total} />;
};

export default MyCartModel;
