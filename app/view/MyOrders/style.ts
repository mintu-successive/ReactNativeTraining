import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../config/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  rightHeaderButton: {
    backgroundColor: COLORS.black,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  selectedButton: {
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.42,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: SIZES.radius,
    alignItems: 'center',
  },
  selectedButtonText: {
    ...FONTS.body4,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  deselectedButton: {
    backgroundColor: COLORS.lightOrange2,
    width: SIZES.width * 0.42,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: SIZES.radius,
    alignItems: 'center',
  },
  deselectedButtonText: {
    ...FONTS.body4,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  historyContainer: {
    flex: 1,
    marginTop: 10,
  },
  upcomingContainer: {
    flex: 1,
    marginTop: 10,
  },
  historyItemContainer: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    padding: 10,
  },
  subHistoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  historyItemImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  historyImageContainer: {
    borderRadius: 10,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 70,
  },
  orderStatusContainer: {},
  historyItemNameText: {
    ...FONTS.h3,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  historyItemTimestampText: {
    ...FONTS.body4,
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  historyItemStatusText: {
    ...FONTS.body4,
    fontWeight: 'bold',
  },
  historyItemPriceText: {
    ...FONTS.h3,
    color: COLORS.primary,
  },
  titleText: {
    ...FONTS.h3,
    marginTop: 10,
    color: COLORS.gray,
  },
  upcomingItemContainer: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    padding: 10,
    marginVertical: 5
  },
  subUpcomingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upcomingItemImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  upcomingImageContainer: {
    borderRadius: 10,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 70,
  },
  upcomingOrderStatusContainer: {},
  upcomingItemNameText: {
    ...FONTS.h3,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  upcomingItemTimestampText: {
    ...FONTS.body4,
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  upcomingItemStatusText: {
    ...FONTS.body4,
    fontWeight: 'bold',
  },
  upcomingItemPriceText: {
    ...FONTS.h3,
    color: COLORS.primary,
  },
});

export default styles;
