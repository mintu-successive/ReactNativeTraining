import {combineReducers} from 'redux';
import setProfilePic from './profileImage';
import setMyCartList from './MyCartList';

const RootReducer = combineReducers({
  setProfilePic: setProfilePic,
  setMyCartList: setMyCartList,
});

export default RootReducer;
