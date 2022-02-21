import React, {useEffect, useState} from 'react';
import FoodDetailScreen from '../view/FoodDetailScreen';
import {dummyData} from '../config/Constants';
import {useSelector, useDispatch} from 'react-redux';
import {setMyCartList} from '../redux/actions';
import {MyCartData} from '../Models';
import {useFocusEffect} from '@react-navigation/native';

const FoodDetailModel = ({route, navigation}: any) => {
  const {item, index} = route.params;
  const list = useSelector((state: any) => state.setMyCartList.list);
  const [selectedSize, setSelectedSize] = useState(1);
  const [quantity, setQuantity] = useState(0);
  const [newItem, setNewItem] = useState(item);
  const dispatch = useDispatch();

  const buyNow = () => {
    if (list.find((item: MyCartData) => item.id == newItem.id)) {
      let newData = {qty: quantity};
      let finalItem = {...newItem, ...newData};
      dispatch(setMyCartList('UPDATE', index, finalItem));
      setNewItem(finalItem);
      navigation.replace('MyCart');
    } else {
      let newData = {qty: quantity};
      let finalItem = {...newItem, ...newData};
      dispatch(setMyCartList('ADD', index, finalItem));
      setNewItem(finalItem);
      navigation.replace('MyCart');
    }
  };

  useEffect(() => {
    if (list.length > 0) {
      let obj = list.find((item: MyCartData) => item.id == newItem.id);
      if (obj) {
        setQuantity(obj.qty);
      }
    }
  }, [list]);

  return (
    <FoodDetailScreen
      navigation={navigation}
      item={item}
      selectedSize={selectedSize}
      onSizePress={(size: any) => setSelectedSize(size)}
      quantity={quantity}
      setQuantity={(value: number) => setQuantity(value)}
      buyNow={() => buyNow()}
      list={list}
    />
  );
};

export default FoodDetailModel;
