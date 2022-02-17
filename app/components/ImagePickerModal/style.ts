import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../config/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.transparentBlack7,
  },
  empty: {
    flex: 0.8,
  },
  subContainer: {
    flex: 0.2,
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    ...FONTS.h2,
    color: COLORS.black,
  },
  deleteIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: COLORS.lightOrange2,
    alignItems: 'center',
    padding: 10,
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  individualItemContainer: {
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText:{
      ...FONTS.h3,
      color: COLORS.black,
      marginTop: 5
  }
});

export default styles;
