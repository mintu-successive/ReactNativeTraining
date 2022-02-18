import {MyCartData} from '../../Models';

const initialState = {
  list: [],
  total: 0
};

const setMyCartList = (
  state = initialState,
  action: {type: string; payload: {index: number; data: MyCartData}},
) => {
  if (action.type === 'ADD') {
    return {
      ...state,
      list: [...state.list,action.payload.data],
      total: state.total + action.payload.data.qty*action.payload.data.price
    };
  } else if (action.type === 'REMOVE') {
    const filteredList = state.list.splice(action.payload.index, 1);
    if (state.list[action.payload.index] <= 0) {
      delete state.list[action.payload.index];
    }
    return {
      ...state,
      list: [...state.list],
      total: state.total - action.payload.data.qty*action.payload.data.price
    };
  } else if (action.type === 'UPDATE') {
    const newArray: MyCartData[] = [...state.list];
    newArray[action.payload.index] = action.payload.data;

    // let i = state.list[action.payload.index]
    // let t = state.total - i.qty*i.price
    return {
      ...state,
      list: newArray,
      total: state.total + action.payload.data.qty*action.payload.data.price
    };
  }
  return state;
};

export default setMyCartList;
