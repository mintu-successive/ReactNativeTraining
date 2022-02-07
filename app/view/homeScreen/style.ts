import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../config/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  header: {
    // marginTop: 10,
  },
  search: {},
  deliveryText: {
    marginTop: 20,
    color: COLORS.primary,
    fontSize: 16,
  },
  picker: {
    height: 50,
    width: '75%',
  },
  categoriesItemContainer: {
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesImage: {
    width: 50,
    height: 50,
    marginTop: 10,
    resizeMode: 'contain',
  },
  categoriesText: {
    fontWeight: '800',
  },
  renderMainContainer: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    width: SIZES.width * 0.45,
  },
  caloriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  calorieImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginTop: 5,
  },
  loveImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: 'red',
    marginTop: 5,
  },
  renderMainFoodImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  renderMainNameText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '800',
  },
  renderMainDescText: {
    fontSize: 12,
    color: COLORS.gray,
    fontWeight: '500',
  },
  renderMainPriceText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '800',
    marginTop: 10,
  },
  dropDownButton: {
    marginTop: 10,
    height: 30,
    width: '75%',
    backgroundColor: COLORS.lightGray2,
  },
  dropDownButtonText: {
    color: 'black',
    fontWeight: '800',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  sectionHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  showAllText: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: '500',
  },
  rightHeaderButton: {
    backgroundColor: 'black',
  },
  recommendedFlatList: {
    marginVertical: 10,
    paddingVertical: 10,
  },
  popularFlatList: {
    marginVertical: 10,
    paddingVertical: 10,
  },
  categoriesFlatList: {
    marginVertical: 10,
    paddingVertical: 10,
  },
});

export default styles;
