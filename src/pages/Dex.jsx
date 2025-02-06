import MyPokemon from "../components/MyPokemon";
import PokemonList from "../components/PokemonList";
import { MAX_POKEMON_MEMBERS, STORAGE_KEY } from "../constants/constants";
import GlobalStyle from "../style/globalStyle";
import useLocalStorage from "../hooks/useLocalStorage";

function Dex() {
    // 내가 잡은 포켓몬 배열을 상태와 로컬스토리지로 관리
    const [myPokemons, setMyPokemons] = useLocalStorage(STORAGE_KEY, [])

    // 내 포켓몬 추가 핸들러
    const catchMyPokemonsHandler = (pokemon) => {
        myPokemons.length < MAX_POKEMON_MEMBERS
            ? myPokemons.some((data) => data.id === pokemon.id)
                ? alert("same pokemon!")
                : setMyPokemons([...myPokemons, pokemon])
            : alert("too many!");
    };

    // 내 포켓몬 삭제 핸들러
    const releaseMyPokemonsHandler = (id) => {
        setMyPokemons(myPokemons.filter((pokemon) => pokemon.id !== id));
    };

    return (
        <>
            <GlobalStyle/>
            <MyPokemon
                myPokemons={myPokemons}
                releaseMyPokemons={releaseMyPokemonsHandler}
            />
            <PokemonList catchMyPokemons={catchMyPokemonsHandler} />
        </>
    );
}

export default Dex;
