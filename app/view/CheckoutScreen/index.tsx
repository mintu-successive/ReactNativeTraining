import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {CustomButton, Header} from '../../components';
import {dummyData, icons} from '../../config/Constants';
import RenderItem from './RenderItem';
import styles from './style';

interface InputProp {
  navigation: any;
}

const CheckoutScreen = (props: InputProp) => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <Header
              title="CHECKOUT"
              leftIcon={icons.back}
              leftOnPress={() => {}}
            />

            <View style={{flex: 2}}>
              <FlatList
                data={dummyData.myCards}
                extraData={dummyData.myCards}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({item, index}) => {
                  return (
                    <RenderItem item={item} index={index} selectedCard={0} />
                  );
                }}
                style={styles.myCardsFlatList}
                ItemSeparatorComponent={() => <View style={{margin: 5}} />}
                showsVerticalScrollIndicator={false}
              />
            </View>

            <View style={{flex: 1}}>
              <Text style={styles.labelText}>Delivery Address</Text>

              <View style={styles.deliveryContainer}>
                <Image style={styles.deliveryIcon} source={icons.location1} />
                <Text style={styles.addressText}>
                  300 Post Street San Francisco, CA
                </Text>
              </View>
            </View>

            <View style={{flex: 1}}>
              <Text style={styles.labelText}>Add Coupon</Text>

              <View style={styles.couponContainer}>
                <TextInput style={styles.textInput} placeholder="Coupon Code" />
                <View style={styles.couponIconContainer}>
                  <Image style={styles.couponIcon} source={icons.discount} />
                </View>
              </View>
            </View>
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
                onPress={() => navigation.navigate('MyCards')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckoutScreen;
