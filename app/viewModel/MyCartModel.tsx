import React, {useEffect, useState} from 'react';
import {dummyData} from '../config/Constants';
import {MyCartData} from '../Models';
import MyCartScreen from '../view/MyCartScreen';
import {useSelector, useDispatch} from 'react-redux';
import {setMyCartList} from '../redux/actions';

const MyCartModel = ({navigation}: any) => {
  const [total, setTotal] = useState(0);
  const list = useSelector(state => state.setMyCartList.list);
  const dispatch = useDispatch();

  const calculatePrice = (item: MyCartData) => {
    let total = 0;
    total = total + item.qty * item.price;
    console.log(total);
    return total;
  };

  useEffect(() => {
    dummyData.myCart.forEach((item, index) => {
      dispatch(setMyCartList('ADD', index, item));
    });
    setTimeout(() => {
      list.forEach((item: MyCartData) => {
        setTotal(total + calculatePrice(item));
      });
    }, 500);
  }, [total]);

  return <MyCartScreen navigation={navigation} data={list} total={total} />;
};

export default MyCartModel;
