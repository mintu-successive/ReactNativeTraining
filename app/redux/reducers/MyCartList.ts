import {MyCartData} from '../../Models';

const initialState = {
  list: [],
};

const setMyCartList = (
  state = initialState,
  action: {type: string; payload: {index: number; data: MyCartData}},
) => {
  if (action.type === 'ADD') {
    return {
      ...state,
      list: [action.payload.data, ...state.list],
    };
  } else if (action.type === 'REMOVE') {
    const filteredList = state.list.splice(action.payload.index, 1);
    return {
      ...state,
      todos: filteredList,
    };
  } else if (action.type === 'UPDATE') {
    const newArray: MyCartData[] = [...state.list];
    newArray[action.payload.index] = action.payload.data;
    return {
      ...state,
      todos: newArray,
    };
  }
  return state;
};

export default setMyCartList;
