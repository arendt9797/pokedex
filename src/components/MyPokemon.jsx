import styled from "styled-components";
import PokemonCard from "./PokemonCard.jsx";
import { RELEASE, MAX_POKEMON_MEMBERS } from "../constants/constants.js";
import EmptyCard from "./EmptyCard.jsx";
import { useSelector } from "react-redux";

const MyPokemons = styled.div`
    width: 90%;
    padding: 20px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(6, 140px);
    gap: 20px;
    justify-content: space-evenly;
    background-color: #f3f3f3;

    @media (max-width: 1060px) {
        grid-template-columns: repeat(3, 140px);
    };
`;

const MyPokemonTitle = styled.h1`
    width: 90%;
    margin: auto;
    padding: 20px 20px 0;
    text-align: center;
    background-color: #f3f3f3;
    font-size: x-large;
    color: #ee5351;
`;

function MyPokemon() {
    const myPokemons = useSelector((state) => state.myPokemons)
    console.log('myPokemons =====>', myPokemons);

    // 내 포켓몬이 6마리보다 적을 경우 빈자리에 빈 카드를 표시한다.
    const emptyCardsNumber = MAX_POKEMON_MEMBERS - myPokemons.length;
    const dashboard = [...myPokemons, ...Array(emptyCardsNumber).fill(null)];

    return (
        <>
            <MyPokemonTitle> {"내 포켓몬 스쿼드"} </MyPokemonTitle>
            <MyPokemons>
                {dashboard.map((data, index) =>
                    // 데이터가 있을 경우 해당 포켓몬 카드를, 없을 경우 빈 카드를 표시
                    // pokeData와 mode는 context로 관리하기 어렵다.
                    data ? (
                        <PokemonCard
                            key={data.id}
                            pokeData={data}
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
