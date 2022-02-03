import { StyleSheet } from "react-native";
import { COLORS } from "../../config/Constants";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.transparentBlack7,
  },
  empty: {
    flex: 0.2,
  },
  parent: {
    flex: 0.8,
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
    fontSize: 18,
    color: COLORS.black,
    fontWeight: '800',
  },
  headerImage: {
    borderRadius: 10,
    borderColor: COLORS.gray,
    borderWidth: 2,
    width: 30,
    height: 30,
  },
  labelContainer: {
    marginTop: 20,
  },
  labelText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '800',
  },
  deliveryItemContainer: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  deliveryItemText: {
    color: COLORS.gray,
  },
  ratingItemContainer: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingItemText: {
    color: COLORS.gray,
    fontSize: 18,
  },
  ratingImage: {
    width: 20,
    height: 20,
    marginStart: 5,
    resizeMode: 'contain',
    tintColor: COLORS.gray,
  },
  applyButton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  circleMarker: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'white',
    marginTop: 30,
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles