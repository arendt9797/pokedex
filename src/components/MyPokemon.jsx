import styled from "styled-components";

const MyPokemons = styled.div`
    width: 1200px;
    padding: 20px 0;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(6, 140px);
    justify-content: space-evenly;
    background-color: #fdfdf9;
`;

const MyPokemonsTitle = styled.h1`
    width: 1200px;
    margin: auto;
    padding-top: 20px;
    text-align: center;
    background-color: #fdfdf9;
    font-size: xx-large;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
`;

function MyPokemon() {
    const style = {
        width: "140px",
        height: "210px",
        backgroundColor: "blue",
    };

    return (
        <>
            <MyPokemonsTitle> My Pokemons </MyPokemonsTitle>
            <MyPokemons>
                <div style={style}>hello</div>
                <div style={style}>hello</div>
                <div style={style}>hello</div>
                <div style={style}>hello</div>
                <div style={style}>hello</div>
                <div style={style}>hello</div>
            </MyPokemons>
        </>
    );
}

export default MyPokemon;
