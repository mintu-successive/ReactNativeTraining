import {MyCartData} from '../../Models';

const initialState = {
  list: [] as MyCartData[],
  total: 0,
};

const setMyCartList = (
  state = initialState,
  action: {type: string; payload: {index: number; data: MyCartData}},
) => {
  if (action.type === 'ADD') {
    return {
      ...state,
      list: [...state.list, action.payload.data],
      total: Math.round(
        state.total + action.payload.data.qty * action.payload.data.price,
      ),
    };
  } else if (action.type === 'REMOVE') {
    const filteredList = state.list.splice(action.payload.index, 1);
    return {
      ...state,
      list: [...state.list],
      total: Math.round(
        state.total - action.payload.data.qty * action.payload.data.price,
      ),
    };
  } else if (action.type === 'UPDATE') {
    const newArray: MyCartData[] = [...state.list];
    newArray[action.payload.index] = action.payload.data;

    let oldTotal =
      state.list[action.payload.index].qty *
      state.list[action.payload.index].price;
    let newTotal = state.total - oldTotal;
    let finalTotal =
      newTotal + action.payload.data.qty * action.payload.data.price;

    return {
      ...state,
      list: newArray,
      total: Math.round(finalTotal),
    };
  }
  return state;
};

export default setMyCartList;
