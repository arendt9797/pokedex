import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { MAX_POKEMON_MEMBERS, STORAGE_KEY } from "../constants/constants";
import { toast } from "react-toastify";

// Context 생성
const PokemonContext = createContext(null);

// Provider 컴포넌트를 사용하면 책임 분담 의미도 있고
// 다른 컴포넌트에서도 동일한 context를 사용할 수 있어 재사용성이 증가한다.
// 이번 과제에서는 Router 컴포넌트를 감쌌기 때문에 재사용할 일은 없다
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
