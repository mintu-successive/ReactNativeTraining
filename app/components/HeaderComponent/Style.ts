import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../config/Constants';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  subContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftButton: {
    borderRadius: 10,
    borderColor: COLORS.gray3,
    borderWidth: 1,
    paddingHorizontal: 3.5,
    paddingVertical: 6,
  },
  leftIconImage: {
    width: SIZES.width * 0.09,
    height: SIZES.height * 0.04,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.black,
  },
  rightButton: {
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  rightIconImage: {
    width: SIZES.width * 0.1,
    height: SIZES.height * 0.05,
    resizeMode: 'contain',
  },
  emptyView: {
    width: SIZES.width * 0.08,
    borderRadius: 10,
    padding: 5,
  },
  cartItemNumberText: {
    position: 'absolute',
    end: 5,
    top: 5,
    backgroundColor: COLORS.primary,
    color: 'white',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 50,
    fontSize: 10,
    fontWeight: '800',
  },
});

export default styles