import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../config/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  subContainerOne: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 0.3,
    justifyContent: 'center'
  },
  subContainerTwo: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex:0.7,
    justifyContent: 'center'
  },
  divider: {
    borderWidth: 0.2,
    borderColor: COLORS.gray3,
    marginVertical: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  labelText: {
    ...FONTS.body3,
    color: COLORS.gray2,
    fontWeight: 'bold',
  },
  valueText: {
    ...FONTS.body3,
    color: COLORS.black,
    fontWeight: 'bold',
    textAlign: 'right'
  },
});

export default styles;
