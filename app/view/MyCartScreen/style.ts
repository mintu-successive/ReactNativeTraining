import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../config/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  rightHeaderButton: {
    backgroundColor: COLORS.lightOrange2,
  },
  renderItemButtonContainer: {
    backgroundColor: COLORS.lightGray2,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  renderItemImage: {
    width: SIZES.width * 0.2,
    height: SIZES.height * 0.1,
    resizeMode: 'contain',
    marginTop: 10,
  },
  myCartFlatList: {
    marginTop: 20,
    // backgroundColor:'red'
  },
  quantityButtonContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    height: 50,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  quantityText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '800',
    paddingHorizontal: 10,
  },
  nameText: {
    ...FONTS.h3,
    color: COLORS.black,
    fontWeight: '800',
  },
  priceText: {
    ...FONTS.body3,
    color: COLORS.primary,
    fontWeight: '800',
  },
  orderSummarySection: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    flex: 0.3,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    marginTop: 20,
    padding: 20,
  },
  subTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  spacer: {
    borderColor: 'gray',
    borderWidth: 0.5,
    marginTop: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
  },
  placeOrderButton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  subTotalText: {
    ...FONTS.h3,
    color: COLORS.gray,
    fontWeight: '800',
  },
  subTotalAmountText: {
    ...FONTS.h3,
    color: COLORS.black,
    fontWeight: '800',
  },
  totalAmountText: {
    ...FONTS.h2,
    color: COLORS.black,
    fontWeight: '800',
  },
});

export default styles;
