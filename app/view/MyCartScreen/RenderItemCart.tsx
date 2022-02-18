import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {COLORS, icons} from '../../config/Constants';
import styles from './style';
import {useSelector, useDispatch} from 'react-redux';
import {setMyCartList} from '../../redux/actions';

const RenderRight = () => {
  return (
    <View style={styles.renderRightContainer}>
      <View>
        <Image style={styles.renderRightImage} source={icons.delete_icon} />
      </View>
    </View>
  );
};

const RenderItemCart = ({item, index}: any) => {
  const [price, setPrice] = useState(item.price);
  const list = useSelector((state: any) => state.setMyCartList.list);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(list[index].qty);

  useEffect(() => {}, [quantity]);

  const increase = () => {
    setQuantity(quantity + 1);
    let newItem = {...item, qty: quantity};
    dispatch(setMyCartList('UPDATE', index, newItem));
    // console.log('increase', newItem);
  };

  const decrease = () => {
    setQuantity(quantity - 1);
    let newItem = {...item, qty: quantity};
    dispatch(setMyCartList('UPDATE', index, newItem));
    // console.log('decrease', newItem);
  };

  const deleteItem = () => {
    dispatch(setMyCartList('REMOVE', index, item));
    // console.log('Item Deleted: ', item);
  };

  return (
    <View style={styles.itemParentContainer}>
      <Swipeable
        overshootRight={false}
        onSwipeableRightOpen={() => deleteItem()}
        renderRightActions={() => <RenderRight />}>
        <View style={styles.renderItemButtonContainer}>
          <View style={styles.subContainer}>
            <Image style={styles.renderItemImage} source={item.image} />
            <View>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.priceText}>${item.price}</Text>
            </View>
          </View>

          <View style={styles.quantityButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                decrease();
              }}>
              <Image style={styles.quantityImage} source={icons.minus} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              onPress={() => {
                increase();
              }}>
              <Image style={styles.quantityImage} source={icons.plus} />
            </TouchableOpacity>
          </View>
        </View>
      </Swipeable>
    </View>
  );
};

export default RenderItemCart;
function newItem(
  arg0: string,
  index: any,
  newItem: any,
): {
  type: string;
  payload: {index: number; data: import('../../Models/MyCartData').default};
} {
  throw new Error('Function not implemented.');
}
