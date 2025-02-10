import { configureStore } from "@reduxjs/toolkit";
import myPokemonsReducer from "../slices/myPokemonsSlice";

const store = configureStore({
    reducer: {
        myPokemons: myPokemonsReducer,
    },
});

export default store;
