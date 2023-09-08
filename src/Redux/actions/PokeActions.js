import { PokeActionTypes } from "../constants/PokeActionTypes";

const PokeActions = {
  updatePokemonList: (data) => ({
    type: PokeActionTypes.UPDATE_POKEMON,
    payload: data,
  }),
  selectedPokemonList: (data) => ({
    type: PokeActionTypes.SELECTED_POKEMON,
    payload: data,
  }),
};
export default PokeActions;
