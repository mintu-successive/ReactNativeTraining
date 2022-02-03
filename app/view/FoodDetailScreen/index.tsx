import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Header, TitleText} from '../../components';
import {COLORS} from '../../config/Constants';
import styles from './style';
import {icons, constants, dummyData, images} from '../../config/Constants';

interface InputProp {
  navigation: any;
  item: any;
  selectedSize: Number;
  onSizePress: (size: Number) => void;
}

const FoodDetailScreen = (props: InputProp) => {
  const {navigation, item, selectedSize, onSizePress} = props;

  const renderItemSizes = ({item, index}: any) => (
    <TouchableOpacity
      onPress={() => onSizePress(item.id)}
      style={[
        selectedSize == item.id
          ? {
              backgroundColor: COLORS.primary,
            }
          : {
              backgroundColor: COLORS.white,
              borderWidth: 1,
              borderColor: COLORS.gray3,
            },
        styles.sizeItemContainer,
      ]}>
      <Text
        style={[
          selectedSize == item.id
            ? {
                color: 'white',
              }
            : {
                color: COLORS.gray3,
              },
          styles.sizeItemText,
        ]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  var ratingViewList: any = [];

  const loop = () => {
    let length = dummyData.myProfile.rating;
    for (let index = 1; index <= length; index++) {
      ratingViewList.push(
        <View key={index}>
          <Image
            style={[
              styles.sellerRatingImage,
              {
                tintColor: COLORS.orange,
              },
            ]}
            source={icons.star}
          />
        </View>,
      );
    }
    for (let index = 1; index <= 5 - length; index++) {
      ratingViewList.push(
        <View key={length + index}>
          <Image
            style={[
              styles.sellerRatingImage,
              {
                tintColor: COLORS.lightOrange3,
              },
            ]}
            source={icons.star}
          />
        </View>,
      );
    }
    return ratingViewList;
  };

  return (
    <View style={styles.container}>
      <Header
        title="DETAILS"
        leftIcon={icons.back}
        rightIcon={icons.cart}
        rightButtonSyle={styles.rightHeaderButton}
        leftOnPress={() => {
          navigation.goBack(null);
        }}
        rightOnPress={() => { navigation.navigate("MyCart")}}
        isCart
      />

      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.productImageContainer}>
          <View style={styles.caloriesContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={icons.calories} style={styles.calorieImage} />
              <Text
                style={{
                  color: COLORS.gray,
                }}>
                {item.calories} Calories
              </Text>
            </View>
            <TouchableOpacity>
              <Image source={icons.love} style={styles.loveImage} />
            </TouchableOpacity>
          </View>

          <Image style={styles.itemImage} source={item.image} />
        </View>

        <Text style={styles.itemNameText}>{item.name}</Text>

        <Text style={styles.descriptionText}>{item.description}</Text>

        <View style={styles.detailSectionContainer}>
          <View style={styles.ratingView}>
            <Image style={styles.ratingImage} source={icons.star} />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>

          <View style={styles.deliveryTimeView}>
            <Image style={styles.deliveryTimeImage} source={icons.clock} />
            <Text style={styles.deliveryTimeText}>{item.delivery_time}</Text>
          </View>

          <View style={styles.shippingView}>
            <Image style={styles.shippingImage} source={icons.dollar} />
            <Text style={styles.shippingText}>{item.shipping}</Text>
          </View>
        </View>

        <View style={styles.sizesSectionContainer}>
          <Text style={styles.sizeText}>Sizes:</Text>
          <View>
            <FlatList
              data={dummyData.sizes}
              extraData={dummyData.sizes}
              keyExtractor={(_, i) => i.toString()}
              renderItem={renderItemSizes}
              ItemSeparatorComponent={() => {
                return <View style={{margin: 5}} />;
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View style={styles.sellerSectionContainer}>
          <View style={styles.separator} />

          <View style={styles.sellerInfoContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.sellerImage}
                source={dummyData.myProfile.profile_image}
              />

              <View style={styles.profileDetails}>
                <Text style={styles.profileNameText}>
                  {dummyData.myProfile.name}
                </Text>
                <Text style={styles.profileAddressText}>
                  12 KM away from you
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginStart: 10}}>
              {loop()}
            </View>
          </View>

          <View style={styles.separator} />
        </View>
      </ScrollView>

      <View style={styles.footerSection}>
        <View style={styles.footerSubContainer}>
          <View style={styles.quantityButtonContainer}>
            <TouchableOpacity>
              <Image style={styles.quantityImage} source={icons.minus} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>1</Text>
            <TouchableOpacity>
              <Image style={styles.quantityImage} source={icons.plus} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.buyNowButton}>
            <View style={styles.buyNowButtonTextContainer}>
              <Text style={styles.buyNowText}>Buy Now</Text>
              <Text style={styles.priceText}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FoodDetailScreen;
