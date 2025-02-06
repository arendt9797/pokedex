import styled from "styled-components";
import pokemonData from "../data/PokemonData.js";
import PokemonCard from "./PokemonCard.jsx";
import { ADD } from "../constants/constants.js";

const PokemonsList = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 20px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 140px);
    gap: 20px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    background-color: #f3f3f3;
`;

function PokemonList({ catchMyPokemons }) {
    return (
        <PokemonsList>
            {/* 포켓몬 데이터를 이용해 포켓몬 리스트 표시 */}
            {pokemonData.map((data) => (
                <PokemonCard
                    key={data.id}
                    pokeData={data}
                    catchMyPokemons={catchMyPokemons}
                    mode={ADD}
                />
            ))}
        </PokemonsList>
    );
}

export default PokemonList;
