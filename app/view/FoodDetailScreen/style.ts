import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../config/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  productImageContainer: {
    backgroundColor: COLORS.lightGray2,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    height: '28%',
  },
  itemImage: {
    width: SIZES.width * 0.3,
    height: SIZES.height * 0.2,
    resizeMode: 'cover',
    marginTop: 5,
  },
  caloriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  calorieImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginTop: 5,
  },
  loveImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: 'red',
    marginTop: 5,
  },
  itemNameText: {
    fontSize: 30,
    fontWeight: '800',
    color: COLORS.black,
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.gray,
    marginTop: 10,
  },
  detailSectionContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  ratingView: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
  },
  ratingImage: {
    tintColor: 'white',
    width: 20,
    height: 20,
  },
  ratingText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginStart: 5,
  },
  deliveryTimeView: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 10,
    marginStart: 10,
  },
  deliveryTimeImage: {
    tintColor: 'black',
    width: 20,
    height: 20,
  },
  deliveryTimeText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginStart: 5,
  },
  shippingView: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 10,
  },
  shippingImage: {
    tintColor: 'black',
    width: 20,
    height: 20,
  },
  shippingText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginStart: 5,
  },
  sizesSectionContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sizeText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '800',
  },
  sizeItemContainer: {
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  sizeItemText: {
    fontSize: 18,
    fontWeight: '800',
  },
  sellerSectionContainer: {
    marginTop: 10,
  },
  separator: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    marginVertical: 8,
  },
  sellerInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sellerImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  sellerRatingImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  profileDetails: {
    marginStart: 5,
    justifyContent: 'center',
  },
  profileNameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '800',
  },
  profileAddressText: {
    color: COLORS.gray,
    fontWeight: '500',
  },
  footerSection: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  footerSubContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  quantityButtonContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray2,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    height: 60,
  },
  quantityImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  quantityText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '800',
    paddingHorizontal: 10,
  },
  buyNowButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    height: 60,
    width: 200,
  },
  buyNowText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  priceText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  buyNowButtonTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  rightHeaderButton: {
    backgroundColor: COLORS.lightOrange2,
  },
});

export default styles;
