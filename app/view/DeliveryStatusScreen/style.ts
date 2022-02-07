import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../config/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  header: {
    ...FONTS.h3,
    color: COLORS.black,
    alignSelf: 'center',
    fontWeight: '800',
    marginTop: 10,
  },
  estimatedDeliveryText: {
    ...FONTS.body3,
    color: COLORS.gray2,
    alignSelf: 'center',
    fontWeight: '800',
    marginTop: 20,
  },
  dateTimeText: {
    ...FONTS.h2,
    alignSelf: 'center',
    marginTop: 5,
    color: COLORS.black,
  },
  trackOrderContainer: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    marginTop: 20,
  },
  trackOrderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SIZES.padding,
  },
  trackOrderText: {
    ...FONTS.body3,
    color: COLORS.black,
    fontWeight: '800',
  },
  orderIDText: {
    ...FONTS.body3,
    color: COLORS.gray,
    fontWeight: '800',
  },
  divider: {
    borderColor: COLORS.gray3,
    borderWidth: 0.5,
  },
  orderStatusIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: COLORS.gray3,
  },
  lineIcon: {
    width: 3,
    height: 30,
  },
  verticalLine: {
    height: 30,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  orderStatusContainer: {
    padding: SIZES.padding,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  itemTextContainer: {
    marginStart: 10,
  },
  titleText: {
    ...FONTS.h3,
    color: COLORS.black,
    fontWeight: '800',
  },
  subTitleText: {
    ...FONTS.body5,
    color: COLORS.gray2,
    fontWeight: '800',
  },
  customButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  customButton: {
      marginBottom: 10
  },
});

export default styles;
