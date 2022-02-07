import React, {useState} from 'react';
import MyOrdersScreen from '../view/MyOrders';

interface InputProp {
  navigation: any;
}

const MyOrdersModel = (props: InputProp) => {
  const {navigation} = props;
  const [isHistory, setIsHistory] = useState(true);

  return (
    <MyOrdersScreen
      navigation={navigation}
      isHistory={isHistory}
      setIsHistory={(value: boolean) => setIsHistory(value)}
    />
  );
};

export default MyOrdersModel;
