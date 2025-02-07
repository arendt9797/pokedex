import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { MAX_POKEMON_MEMBERS, STORAGE_KEY } from "../constants/constants";
import { toast } from "react-toastify";

const PokemonContext = createContext(null);

function PokemonProvider({ children }) {
    const [myPokemons, setMyPokemons] = useLocalStorage(STORAGE_KEY, []);

    const catchMyPokemonsHandler = (pokemon, name) => {
        myPokemons.length < MAX_POKEMON_MEMBERS
            ? myPokemons.some((data) => data.id === pokemon.id)
                ? toast.error("이미 내 포켓몬이야")
                : (toast.info(`${name}, 넌 내꺼야!`),
                  setMyPokemons([...myPokemons, pokemon]))
            : toast.error("더는 잡을 수 없어!");
    };

    const releaseMyPokemonsHandler = (id, name) => {
        toast.info(`바이바이, ${name}!`);
        setMyPokemons(myPokemons.filter((pokemon) => pokemon.id !== id));
    };

    return (
        <PokemonContext.Provider
            value={{
                myPokemons,
                catchMyPokemonsHandler,
                releaseMyPokemonsHandler,
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
}

export { PokemonProvider, PokemonContext };
