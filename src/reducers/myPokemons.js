import { getFromLocalStorage } from "../util/localStorageHandler"

export const CATCH_MY_POKEMONS = "myPokemons/CATCH_MY_POKEMONS"
export const RELEASE_MY_POKEMONS = "myPokemons/RELEASE_MY_POKEMONS"

// 액션 생성자
export const catchMyPokemons = (pokemon) => ({
    type: CATCH_MY_POKEMONS,
    pokemon,
})
export const releaseMyPokemons = (pokemonId) => ({
    type: RELEASE_MY_POKEMONS,
    pokemonId,
})

const initialMyPokemons = getFromLocalStorage()

const myPokemons = (state=initialMyPokemons, action) => {
    switch (action.type) {
        case CATCH_MY_POKEMONS:
            return [
                ...state,
                action.pokemon
            ]
        case RELEASE_MY_POKEMONS:
            return state.filter((pokemon) => pokemon.id !== action.pokemonId)
        default:
            return state
    }
}

export default myPokemons