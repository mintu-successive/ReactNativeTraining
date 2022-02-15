import {StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../../config/Constants';

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: -10,
      height: 10,
    },
    height: 80,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tabViewContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
  tabButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomLabelText:{
      ...FONTS.body4,
      color: COLORS.white,
      paddingHorizontal: 8
  }
});

export default styles;
