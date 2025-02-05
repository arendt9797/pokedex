import styled from "styled-components";

const PokemonsList = styled.div`
    width: 1200px;
    display: grid;
    grid-template-columns: repeat(6, auto);
    background-color: #e69224
`

const style = {
    width:"150px",
    height:"200px",
}

function PokemonList() {
    return (
        <PokemonsList>
            <div style={style}>
                hello            
            </div>
        </PokemonsList>
    )
}

export default PokemonList;
