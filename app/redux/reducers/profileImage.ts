let initialState = '';

const setProfilePic = (
  state = initialState,
  action: {type: string; payload: string},
) => {
  if (action.type === 'PROFILE') {
    return (state = action.payload);
  }
  return state;
};

export default setProfilePic;
