import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../config/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  myCardsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: COLORS.lightGray1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  selectedContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    ...FONTS.h3,
    color: COLORS.black,
    marginStart: 10,
  },
  selectionBox: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  itemIconContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: COLORS.lightGray2,
    borderWidth: 1,
  },
  itemIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  myCardsFlatList: {
    marginTop: 10,
  },
  labelText: {
    ...FONTS.h3,
    color: COLORS.black,
  },
  deliveryContainer: {
    borderRadius: SIZES.radius,
    borderColor: COLORS.lightGray1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  deliveryIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  addressText: {
    ...FONTS.body3,
    color: COLORS.black,
    marginStart: 5,
    fontWeight: '600',
  },
  textInput: {
    borderTopStartRadius: SIZES.radius,
    borderBottomStartRadius: SIZES.radius,
    height: SIZES.height * 0.06,
    flex: 0.8,
  },
  couponContainer: {
    borderRadius: SIZES.radius,
    borderColor: COLORS.lightGray1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    height: SIZES.height * 0.06,
    paddingVertical: 10,
    paddingStart: 10,
  },
  couponIconContainer: {
    flex: 0.2,
    height: SIZES.height * 0.06,
    backgroundColor: COLORS.primary,
    borderTopEndRadius: SIZES.radius,
    borderBottomEndRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  couponIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
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
