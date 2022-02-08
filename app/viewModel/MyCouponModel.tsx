import React, {useState} from 'react';
import MyCouponScreen from '../view/MyCouponScreen';

interface InputProp {
  navigation: any;
}

const MyCouponModel = (props: InputProp) => {
  const {navigation} = props;
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <MyCouponScreen
      navigation={navigation}
      isAvailable={isAvailable}
      setIsAvailable={(value: boolean) => setIsAvailable(value)}
    />
  );
};

export default MyCouponModel;
