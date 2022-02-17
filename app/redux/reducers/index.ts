import {combineReducers} from 'redux';
import setProfilePic from './profileImage';
import setMyCartList from './MyCartList';

const RootReducer = combineReducers({
    setProfilePic,
    setMyCartList
});

export default RootReducer;
