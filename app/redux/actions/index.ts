import {MyCartData} from '../../Models';

export const setProfilePic = (value: string | undefined) => {
  return {
    type: 'PROFILE',
    payload: value,
  };
};

export const setMyCartList = (
  type: string,
  index: number,
  data: MyCartData,
) => {
  return {
    type: type,
    payload: {
      index: index,
      data: data,
    },
  };
};
