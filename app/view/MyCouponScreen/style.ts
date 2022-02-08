import {StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../config/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  rightHeaderButton:{
      backgroundColor: COLORS.black
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
  itemContainer:{
      backgroundColor: COLORS.lightGray2,
      borderRadius: SIZES.radius,
  },
  subContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-evenly'
  },
  iconImage:{
      width: SIZES.width*0.2,
      height: SIZES.height*0.15,
      resizeMode: 'contain'
  },
  divider:{
      borderColor: COLORS.white,
      borderStyle: 'dotted',
      borderWidth: 2,
      height: '100%'
  },
  flatList:{
      marginTop:10
  },
  nameText:{
      ...FONTS.h3,
      fontWeight: '800'
  },
  discountText:{
    ...FONTS.h2,
    fontWeight: '900',
    color: COLORS.black
}
});

export default styles;
