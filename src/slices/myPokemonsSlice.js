import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../util/localStorageHandler";

const myPokemonsSlice = createSlice({
    name: "myPokemons",
    initialState: getFromLocalStorage(),
    reducers: {
        catchMyPokemons: (state, action) => {
            state.push(action.pokemon)
            console.log('state =====>', state);
        },
        releaseMyPokemons: (state, action) => {
            state = state.filter((pokemon) => pokemon.id !== action.pokemonId)
        }
    }
})

export const { catchMyPokemons, releaseMyPokemons } = myPokemonsSlice.actions
export default myPokemonsSlice.reducer