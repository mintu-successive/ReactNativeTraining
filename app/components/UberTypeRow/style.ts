import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff'
  },
  image: {
    width: 80,
    height: 70,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color: '#000'
  },
  time: {
      color: '#5d5d5d'
  },
  rightContainer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginStart: 5,
    color: '#000' 
  },
});

export default styles;
