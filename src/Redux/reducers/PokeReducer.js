import { PokeActionTypes } from "../constants/PokeActionTypes";

export const initialState = {
  Records: [
    {
      id: 1,
    },
  ],
};

const PokeReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case PokeActionTypes.UPDATE_POKEMON:
      newState.Records = action.data;
      return newState;

    default:
      return state;
  }
};
export default PokeReducer;
