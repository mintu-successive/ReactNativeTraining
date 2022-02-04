import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CustomButton, Header} from '../../components';
import {icons, dummyData} from '../../config/Constants';
import RenderItemCart from './RenderItemCart';
import styles from './style';

interface InputProp {
  navigation: any;
}

const MyCartScreen = (props: InputProp) => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Header
          title="MY CART"
          leftIcon={icons.back}
          rightIcon={icons.cart}
          leftOnPress={() => {
            navigation.goBack(null);
          }}
          rightOnPress={() => {}}
          rightButtonStyle={styles.rightHeaderButton}
          isCart
        />

        <FlatList
          data={dummyData.myCart}
          extraData={dummyData.myCart}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item, index}) => {
            return <RenderItemCart item={item} index={index} />;
          }}
          ItemSeparatorComponent={() => {
            return <View style={{margin: 10}} />;
          }}
          style={styles.myCartFlatList}
        />
      </View>

      <View style={styles.orderSummarySection}>
        <View style={styles.subTotalContainer}>
          <Text style={styles.subTotalText}>Subtotal</Text>
          <Text style={styles.subTotalAmountText}>$37.97</Text>
        </View>

        <View style={styles.subTotalContainer}>
          <Text style={styles.subTotalText}>Shipping fee</Text>
          <Text style={styles.subTotalAmountText}>$0.00</Text>
        </View>

        <View style={styles.spacer} />

        <View style={styles.totalContainer}>
          <Text style={styles.totalAmountText}>Total:</Text>
          <Text style={styles.totalAmountText}>$37.97</Text>
        </View>

        <View style={styles.placeOrderButton}>
          <CustomButton
            text="Place Your Order"
            onPress={()=> navigation.navigate("MyCards")}
          />
        </View>
      </View>
    </View>
  );
};

export default MyCartScreen;
