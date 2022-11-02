import { PokeActionTypes } from "../constants/PokeActionTypes";

export const initialState = {
  Records: [],
  selectedRecords: [],
};

const PokeReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case PokeActionTypes.UPDATE_POKEMON:
      newState.Records = action.payload;
      return newState;

    case PokeActionTypes.SELECTED_POKEMON:
      newState.selectedRecords = action.payload;
      // return {
      //   ...state,
      //   Records: action.payload,
      // };
      return newState;
    default:
      return state;
  }
};
export default PokeReducer;
