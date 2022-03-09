import React, {useEffect, useState} from 'react';
import DestinationSearchScreen from '../view/DestinationSearch';
import ProfileScreen from '../view/profileScreen/profileScreen';

interface InputProp {
  navigation: any;
}

const DestinationSearchViewModel = (props: InputProp) => {
  const {navigation} = props;
  const [fromText, setFromText] = useState('');
  const [whereText, setWhereText] = useState('');
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);


  useEffect(()=>{
    if(originPlace && destinationPlace){
      console.log("redirected")
    }
  },[originPlace,destinationPlace])
  return (
    <DestinationSearchScreen
      navigation={navigation}
      fromText={fromText}
      whereText={whereText}
      originPlace={originPlace}
      destinationPlace={destinationPlace}
      setFromText={(text: string) => setFromText(text)}
      setWhereText={(text: string) => setWhereText(text)}
      setOriginPlace={(data: any) => setOriginPlace(data)}
      setDestinationPlace={(data: any) => setDestinationPlace(data)}
    />
  );
};

export default DestinationSearchViewModel;
