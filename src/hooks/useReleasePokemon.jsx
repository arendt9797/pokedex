import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { releaseMyPokemons } from "../slices/myPokemonsSlice";
import { setToLocalStorage } from "../util/localStorageHandler";
import { useEffect } from "react";

export const useReleasePokemon = () => {
    const myPokemons = useSelector((state) => state.myPokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        setToLocalStorage(myPokemons);
    }, [myPokemons]);

    const handleReleasePokemon = (pokemonId, pokemonName) => {
        toast.info(`바이바이, ${pokemonName}!`);
        dispatch(releaseMyPokemons(pokemonId));
    };

    return handleReleasePokemon;
};
