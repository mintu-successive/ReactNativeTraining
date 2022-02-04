import React, {useState} from 'react';
import MyCardsScreen from '../view/MyCardsScreen';

interface InputProp {
  navigation: any;
}

const MyCardsModel = (props: InputProp) => {
  const {navigation} = props;
  const [selectedCard, setSelectedCard] = useState(0);
  return <MyCardsScreen navigation={navigation} selectedCard={selectedCard} />;
};

export default MyCardsModel;
