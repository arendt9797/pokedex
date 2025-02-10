import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MAX_POKEMON_MEMBERS } from "../constants/constants"
import { catchMyPokemons } from "../reducers/myPokemons";
import { setToLocalStorage } from "../util/localStorageHandler";

export const useCatchPokemon = () => {
    const myPokemons = useSelector((state) => state.myPokemons)
    const dispatch = useDispatch()

    const handleCatchPokemon = (pokemon, pokemonName) => {
        if (myPokemons.length >= MAX_POKEMON_MEMBERS) {
            toast.error("더는 잡을 수 없어!")
            return
        }

        if (myPokemons.some((data) => data.id === pokemon.id)) {
            toast.error("이미 내 포켓몬이야")
            return
        }

        toast.info(`${pokemonName}, 넌 내꺼야!`)
        dispatch(catchMyPokemons(pokemon))

        setToLocalStorage([...myPokemons, pokemon])
    }

    return handleCatchPokemon;
};
