import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { releaseMyPokemons } from "../reducers/myPokemons"
import { setToLocalStorage } from "../util/localStorageHandler"

export const useReleasePokemon = () => {
    const myPokemons = useSelector((state) => state.myPokemons)
    const dispatch = useDispatch()

    const handleReleasePokemon = (pokemonId, pokemonName) => {
        toast.info(`바이바이, ${pokemonName}!`);
        dispatch(releaseMyPokemons(pokemonId))

        setToLocalStorage(myPokemons.filter((pokemon) => pokemon.id !== pokemonId))
    }

    return handleReleasePokemon
}