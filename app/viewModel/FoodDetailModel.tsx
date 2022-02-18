import React, {useState} from 'react';
import FoodDetailScreen from '../view/FoodDetailScreen';
import {dummyData} from '../config/Constants';
import {useSelector, useDispatch} from 'react-redux';
import {setMyCartList} from '../redux/actions';
import {MyCartData} from '../Models';
import {useFocusEffect} from '@react-navigation/native';

const FoodDetailModel = ({route, navigation}: any) => {
  const {item, index} = route.params;
  const [selectedSize, setSelectedSize] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [newItem, setNewItem] = useState(item);
  const dispatch = useDispatch();
  const list = useSelector((state: any) => state.setMyCartList.list);

  const buyNow = () => {
    let newData = {qty: quantity};
    let i = {...newItem, ...newData};
    dispatch(setMyCartList('ADD', index, i));
    setQuantity(1);
    setNewItem(item);
    navigation.navigate('MyCart');
  };

  return (
    <FoodDetailScreen
      navigation={navigation}
      item={item}
      selectedSize={selectedSize}
      onSizePress={(size: any) => setSelectedSize(size)}
      quantity={quantity}
      setQuantity={(value: number) => setQuantity(value)}
      buyNow={() => buyNow()}
    />
  );
};

export default FoodDetailModel;
