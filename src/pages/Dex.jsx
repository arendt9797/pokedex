import MyPokemon from "../components/MyPokemon";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

const PokemonDex = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #ee5351;
`

function Dex() {
    return (
        <PokemonDex>
            <MyPokemon />
            <PokemonList />
        </PokemonDex>
    );
}

export default Dex;
