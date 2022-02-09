import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../config/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  riderDetailsContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  riderProfileImage: {
    width: SIZES.width * 0.22,
      height: SIZES.height * 0.16,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  nameText:{
      ...FONTS.h2,
      color: COLORS.black
  },
  typeText:{
      ...FONTS.body4,
      color: COLORS.black
  },
  statusText:{
      ...FONTS.body4,
      color: COLORS.green,
      marginStart: 10
  },
  statusContainer:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop: 10,
  },
  dot:{
    backgroundColor: COLORS.green,
    width: 9,
    height: 9,
    borderRadius: 50
  },
  ratingSectionContainer:{
    marginTop: 20,
    alignItems: 'center'
  },
  pleaseRateText:{
    ...FONTS.body3,
    color: COLORS.black
  },
  starImage:{
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: COLORS.lightOrange2,
    margin:5
  },
  starImageSelected:{
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: COLORS.orange,
    margin:5
  },
  starContainer:{
    flexDirection:'row'
  },
  addTipsText:{
    ...FONTS.h3,
    color: COLORS.black,
    marginTop: 10
  },
  itemContainer:{
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 16
  },
  itemText:{
    ...FONTS.body4,
    color: COLORS.white
  },
  notSelectedItemContainer:{
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderColor: COLORS.gray3,
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 16
  },
  notSelectedItemText:{
    ...FONTS.body4,
    color: COLORS.gray3
  },
  flatList:{
    marginTop:10,
    justifyContent: 'center',
  },
  comment:{
    backgroundColor: COLORS.lightGray2,
    color: COLORS.black,
  },
  commentContainer:{
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray2,
    padding: 10,
    flex: 1
  },
  customButton:{
    marginVertical: 10
  }
});

export default styles;
