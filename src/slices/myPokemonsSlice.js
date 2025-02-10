import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../util/localStorageHandler";

const myPokemonsSlice = createSlice({
    name: "myPokemons",
    initialState: getFromLocalStorage(),
    reducers: {
        catchMyPokemons: (state, action) => {
            state.push(action.payload)
        },
        releaseMyPokemons: (state, action) => {
            return state.filter((pokemon) => pokemon.id !== action.payload)
        }
    }
})

// 액션 생성자 역할을 하는 .actions
export const { catchMyPokemons, releaseMyPokemons } = myPokemonsSlice.actions
// 리듀서를 생산하는 .reducer
export default myPokemonsSlice.reducer