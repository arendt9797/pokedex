import styled from "styled-components";
import PokemonCard from "./PokemonCard.jsx";
import { RELEASE, MAX_POKEMON_MEMBERS } from "../constants/constants.js";
import EmptyCard from "./EmptyCard.jsx";

const MyPokemons = styled.div`
    width: 1200px;
    padding: 20px 0;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(6, 140px);
    justify-content: space-evenly;
    background-color: #f3f3f3;
`;

const MyPokemonTitle = styled.h1`
    width: 1200px;
    margin: auto;
    padding-top: 20px;
    text-align: center;
    background-color: #f3f3f3;
    font-size: x-large;
    color: #ee5351;
`;

function MyPokemon({ myPokemons, releaseMyPokemons }) {
    const emptyCardsNumber = MAX_POKEMON_MEMBERS - myPokemons.length;
    const dashboard = [...myPokemons, ...Array(emptyCardsNumber).fill(null)];

    return (
        <>
            <MyPokemonTitle> 내 포켓몬 스쿼드 </MyPokemonTitle>
            <MyPokemons>
                {dashboard.map((data, index) =>
                    data ? (
                        <PokemonCard
                            key={data.id}
                            pokeData={data}
                            releaseMyPokemons={releaseMyPokemons}
                            mode={RELEASE}
                        />
                    ) : (
                        <EmptyCard key={`empty-${index}`} />
                    )
                )}
            </MyPokemons>
        </>
    );
}

export default MyPokemon;
