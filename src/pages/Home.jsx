import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../img/pokedex_background.webp"

const PokedexHome = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #ee5351;
`
const PokedexTitle = styled.p`
    color: #fdfdf9;
    font-size: xx-large;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    text-align: center;
    padding-top: 230px;
`
const StartPokedexButton = styled.button`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 160px;
    height: 160px;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
`

function Home() {
    const navigate = useNavigate();
    return (
        <PokedexHome>
            <PokedexTitle> Start Pokedex </PokedexTitle>
            <StartPokedexButton
                onClick={() => {
                    navigate("/dex");
                }}
            />
        </PokedexHome>
    );
}

export default Home;
