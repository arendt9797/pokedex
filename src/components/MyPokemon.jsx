import styled from "styled-components";

const MyPokemons = styled.div`
    width: 1200px;
    height: 50px;
    display: grid;
    grid-template-columns: repeat(6, auto);
    background-color: #d4d462
`;

function MyPokemon() {
    return <MyPokemons> my pokemons </MyPokemons>;
}

export default MyPokemon;
