import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MAX_POKEMON_MEMBERS } from "../constants/constants";
import { catchMyPokemons } from "../slices/myPokemonsSlice";
import { setToLocalStorage } from "../util/localStorageHandler";
import { useEffect } from "react";

export const useCatchPokemon = () => {
    // myPokemons는 myPokemons 리듀서에서 관리하는 상태
    const myPokemons = useSelector((state) => state.myPokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        setToLocalStorage(myPokemons);
    }, [myPokemons]);

    const handleCatchPokemon = (pokemon, pokemonName) => {
        console.log('pokemon =====>', pokemon);
        console.log('myPokemons =====>', myPokemons);
        if (myPokemons.length >= MAX_POKEMON_MEMBERS) {
            toast.error("더는 잡을 수 없어!");
            return;
        }

        if (myPokemons.some((data) => data?.id === pokemon.id)) {
            toast.error("이미 내 포켓몬이야");
            return;
        }

        // 만들어둔 액션 생성자로 만든 액션 객체를 dispatch를 이용해 리듀서로 보낸다.
        toast.info(`${pokemonName}, 넌 내꺼야!`);
        dispatch(catchMyPokemons(pokemon));
    };

    return handleCatchPokemon;
};
