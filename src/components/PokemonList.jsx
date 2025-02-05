import styled from "styled-components";

const PokemonsList = styled.div`
    width: 1200px;
    margin: auto;
    margin-top: 20px;
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(7, 140px);
    gap: 20px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    background-color: #fdfdf9;
`

const style = {
    width:"140px",
    height:"210px",
    backgroundColor:"blue"
}

function PokemonList() {
    return (
        <PokemonsList>
            <div style={style}>
                hello            
            </div>
            <div style={style}>
                hello            
            </div>
            <div style={style}>
                hello            
            </div>
            <div style={style}>
                hello            
            </div>
            <div style={style}>
                hello            
            </div>
            <div style={style}>
                hello            
            </div>
            <div style={style}>
                hello            
            </div>
            <div style={style}>
                hello            
            </div>
        </PokemonsList>
    )
}

export default PokemonList;
