import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../img/pokedex_background.webp";

const PokedexHome = styled.div`
    height: 100vh;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #ee5351;
`;
const TitleGrid = styled.div`
    display: grid;
    grid-template-areas: "title" "button";
    position: absolute;
    left: 50%;
    top: 47%;
    transform: translate(-50%, -50%);
`;

const PokedexTitle = styled.div`
    grid-area: title;
    padding-bottom: 10px;
    color: #fdfdf9;
    font-size: xx-large;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    text-align: center;
    cursor: default;
`;
const StartPokedexButton = styled.button`
    grid-area: button;
    justify-self: center;
    width: 160px;
    height: 160px;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
`;

function Home() {
    const navigate = useNavigate();
    return (
        <PokedexHome>
            <TitleGrid>
                <PokedexTitle> Start Pokedex </PokedexTitle>
                <StartPokedexButton
                    onClick={() => {
                        navigate("/dex");
                    }}
                />
            </TitleGrid>
        </PokedexHome>
    );
}

export default Home;
