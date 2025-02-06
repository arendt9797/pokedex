import pokeData from "../data/PokemonData.js";
import typeData from "../data/TypeData.js";
import styled from "styled-components";
import GlobalStyle from "../style/globalStyle.jsx";
import { useLocation } from "react-router-dom";
import TYPE_DATA from "../data/TypeData.js";

const PokeDetail = styled.div`
    width: 800px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f3f3f3;
    display: grid;
    grid-template-areas:
        "image name"
        "image type"
        "image description";
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 1.5fr 1fr 5.5fr;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
`;

const DetailImgGrid = styled.div`
    grid-area: image;
    /* margin: 20px 0 20px 20px; */
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const DetailImg = styled.img`
    width: 250px;
`;
const DetailNameGrid = styled.div`
    grid-area: name;
    background-color: white;
    display: flex;
    align-items: center;
    border-radius: 10px;
`;
const DetailId = styled.div`
    width: 70px;
    color: #9b9b9b;
    border: 2px solid #9b9b9b;
    border-radius: 12px;
    padding: 2px;
    margin: 0 20px;
    text-align: center;
`;
const DetailName = styled.p`
    font-size: xx-large;
    color: #ee5351;
`;
const DetailTypeGrid = styled.div`
    grid-area: type;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;
const DetailType = styled.div`
    width: 50px;
    margin-right: 10px;
    padding: 6px;
    border-radius: 5px;
    background-color: ${({color}) => color};
    color: white;
    text-align:center;
`;
const DetailDescriptionGrid = styled.p`
    grid-area: description;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    line-height: 24px;
`;

function Detail() {
    const location = useLocation();
    const pokeId = new URLSearchParams(location.search).get("id");
    const targetPokemon = pokeData.find((data) => data.id === Number(pokeId));

    const pokeImg = targetPokemon.img_url;
    const pokeName = targetPokemon.korean_name;
    const pokeTypes = targetPokemon.types;
    const pokeDescription = targetPokemon.description;

    return (
        <>
            <GlobalStyle />
            <PokeDetail>
                <DetailImgGrid>
                    <DetailImg src={pokeImg} alt="pokemonImg" />
                </DetailImgGrid>
                <DetailNameGrid>
                    <DetailId> No.{pokeId} </DetailId>
                    <DetailName>{pokeName}</DetailName>
                </DetailNameGrid>
                <DetailTypeGrid>
                    {
                        pokeTypes.map((type) => (
                            <DetailType key={crypto.randomUUID()} color={TYPE_DATA[type]}>{type}</DetailType>
                        ))
                    }
                </DetailTypeGrid>
                <DetailDescriptionGrid>{pokeDescription}</DetailDescriptionGrid>
            </PokeDetail>
        </>
    );
}

export default Detail;
