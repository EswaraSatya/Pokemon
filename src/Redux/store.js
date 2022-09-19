import PokeReducer from "./reducers/PokeReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({ reducer: PokeReducer });
