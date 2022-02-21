import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CustomButton, Header} from '../../components';
import {icons, dummyData} from '../../config/Constants';
import RenderItemCart from './RenderItemCart';
import styles from './style';

const MyCartScreen = (props: any) => {
  const {navigation, data, total, setData} = props;
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
          itemNumber={data.length}
        />

        <FlatList
          data={data}
          extraData={data}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item, index}) => {
            return <RenderItemCart item={item} index={index} />;
          }}
          ItemSeparatorComponent={() => {
            return <View style={{margin: 10}} />;
          }}
          ListEmptyComponent={() => {
            return (
              <View>
                <Text>Empty</Text>
              </View>
            );
          }}
          style={styles.myCartFlatList}
        />
      </View>

      <View style={styles.orderSummarySection}>
        <View style={styles.subTotalContainer}>
          <Text style={styles.subTotalText}>Subtotal</Text>
          <Text style={styles.subTotalAmountText}>${total}</Text>
        </View>

        <View style={styles.subTotalContainer}>
          <Text style={styles.subTotalText}>Shipping fee</Text>
          <Text style={styles.subTotalAmountText}>$0.00</Text>
        </View>

        <View style={styles.spacer} />

        <View style={styles.totalContainer}>
          <Text style={styles.totalAmountText}>Total:</Text>
          <Text style={styles.totalAmountText}>${total}</Text>
        </View>

        <View style={styles.placeOrderButton}>
          <CustomButton
            text="Place Your Order"
            onPress={() => navigation.navigate('Checkout')}
          />
        </View>
      </View>
    </View>
  );
};

export default MyCartScreen;
