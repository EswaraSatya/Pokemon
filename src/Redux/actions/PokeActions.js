import { PokeActionTypes } from "../constants/PokeActionTypes";

const PokeActions = {
  updatePokemonList: (status) => ({
    type: PokeActionTypes.UPDATE_POKEMON,
    data: status,
  }),
};
export default PokeActions;
