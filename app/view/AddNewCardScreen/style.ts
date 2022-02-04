import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../config/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  imageBackground: {
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.3,
    resizeMode: 'contain',
    marginTop: 10,
  },
  cardImage: {
    position: 'absolute',
    width: 50,
    height: 50,
    resizeMode: 'contain',
    top: 15,
    end: 35,
  },
  cardNameText: {
    ...FONTS.body3,
    color: COLORS.white,
    bottom: 30,
    start: 20,
    position: 'absolute',
    fontWeight: '800',
  },
  cardNumberText: {
    ...FONTS.body3,
    color: COLORS.white,
    bottom: 10,
    start: 20,
    position: 'absolute',
  },
  cardExpiryText: {
    ...FONTS.body3,
    color: COLORS.white,
    bottom: 10,
    end: 20,
    position: 'absolute',
  },
  inputContainer: {
    marginTop: 20,
  },
  labelText: {
    ...FONTS.h4,
    color: COLORS.gray,
  },
  customInputTextStyle: {
    width: SIZES.width * 0.43,
  },
  rememberContainer:{
      flexDirection:'row',
      marginTop: 5,
      alignItems:'center'
  },
  rememberImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  rememberText:{
      ...FONTS.body4,
      marginStart:5,
      color: COLORS.gray
  }
});

export default styles;
