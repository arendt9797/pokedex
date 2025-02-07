import MyPokemon from "../components/MyPokemon";
import PokemonList from "../components/PokemonList";
import { MAX_POKEMON_MEMBERS, STORAGE_KEY } from "../constants/constants";
import GlobalStyle from "../style/globalStyle";
import useLocalStorage from "../hooks/useLocalStorage";
import { toast } from "react-toastify";

function Dex() {
    // 내가 잡은 포켓몬 배열을 상태와 로컬스토리지로 관리
    const [myPokemons, setMyPokemons] = useLocalStorage(STORAGE_KEY, []);

    // 내 포켓몬 추가 핸들러
    // 추가 버튼을 누르면 추가 토스트와 함께 상태가 업데이트된다.
    // 불가능한 동작은 에러 토스트가 발생한다.
    const catchMyPokemonsHandler = (pokemon, name) => {
        myPokemons.length < MAX_POKEMON_MEMBERS
            ? myPokemons.some((data) => data.id === pokemon.id)
                ? toast.error("이미 내 포켓몬이야")
                : (toast.info(`${name}, 넌 내꺼야!`),
                  setMyPokemons([...myPokemons, pokemon]))
            : toast.error("더는 잡을 수 없어!");
    };

    // 내 포켓몬 삭제 핸들러
    // 삭제 버튼을 누르면 삭제 토스트와 함께 상태가 업데이트된다.
    const releaseMyPokemonsHandler = (id, name) => {
        toast.info(`바이바이, ${name}!`);
        setMyPokemons(myPokemons.filter((pokemon) => pokemon.id !== id));
    };

    return (
        <>
            <GlobalStyle />
            <MyPokemon
                myPokemons={myPokemons}
                releaseMyPokemons={releaseMyPokemonsHandler}
            />
            <PokemonList catchMyPokemons={catchMyPokemonsHandler} />
        </>
    );
}

export default Dex;
