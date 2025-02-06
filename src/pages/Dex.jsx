import { useState } from "react";
import MyPokemon from "../components/MyPokemon";
import PokemonList from "../components/PokemonList";
import { MAX_POKEMON_MEMBERS } from "../constants/constants";
import GlobalStyle from "../style/globalStyle";

function Dex() {
    const [myPokemons, setMyPokemons] = useState([]);

    const catchMyPokemonsHandler = (pokemon) => {
        myPokemons.length < MAX_POKEMON_MEMBERS
            ? myPokemons.some((data) => data.id === pokemon.id)
                ? alert("same pokemon!")
                : setMyPokemons([...myPokemons, pokemon])
            : alert("too many!");
    };

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
