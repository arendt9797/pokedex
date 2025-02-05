import { useState } from "react";
import MyPokemon from "../components/MyPokemon";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import { MAX_POKEMON_MEMBERS } from "../constants/constants";

const PokemonDex = styled.div`
    padding: 20px 0;
    background-color: #ee5351;
`;

function Dex() {
    const [myPokemons, setMyPokemons] = useState([]);

    const addMyPokemonsHandler = (pokemon) => {
        myPokemons.length < MAX_POKEMON_MEMBERS 
            ? (
                myPokemons.some((data) => data.id === pokemon.id) 
                    ? alert("same pokemon!")
                    : setMyPokemons([...myPokemons, pokemon])
            )
            : alert("too many!")
    }

    const releaseMyPokemonsHandler = (id) => {
        setMyPokemons(myPokemons.filter((pokemon) => pokemon.id !== id))
    }

    return (
        <PokemonDex>
            <MyPokemon myPokemons={myPokemons} releaseMyPokemons={releaseMyPokemonsHandler}/>
            <PokemonList addMyPokemons={addMyPokemonsHandler}/>
        </PokemonDex>
    );
}

export default Dex;
