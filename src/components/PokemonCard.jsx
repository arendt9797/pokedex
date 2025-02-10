import styled from "styled-components";
import { ADD } from "../constants/constants.js";
import { useNavigate } from "react-router-dom";
import { useCatchPokemon } from "../hooks/useCatchPokemon.jsx";
import { useReleasePokemon } from "../hooks/useReleasePokemon.jsx";

const Card = styled.div`
    width: 140px;
    height: 210px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
    }
`;
const PokemonImage = styled.img`
    width: 100px;
    height: 100px;
    margin: auto;
`;
const PokemonName = styled.p`
    margin: auto;
    font-weight: bold;
`;
const PokemonNumber = styled.p`
    margin: auto;
    font-size: small;
    color: gray;
`;
const Button = styled.button`
    width: 60px;
    height: 30px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    color: white;
    background-color: #ee5351;
    border: transparent;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        background-color: #e73a37;
    }
`;

function PokemonCard({ pokeData, mode }) {
    // 훅은 항상 컴포넌트 최상단에 위치해야 함
    // 따라서 먼저 이렇게 할당 후 조건문을 사용해야한다.
    const catchHandler = useCatchPokemon()
    const releaseHandler = useReleasePokemon()

    const imgUrl = pokeData.img_url;
    const koreanName = pokeData.korean_name;
    const pokeId = pokeData.id;

    const navigate = useNavigate();
    
    return (
        <>
            <Card
                onClick={() => {
                    navigate(`/detail?id=${pokeId}`);
                }}
            >
                <PokemonImage src={imgUrl} />
                <PokemonName>{koreanName}</PokemonName>
                <PokemonNumber>
                    No. {String(pokeId).padStart(3, "0")}
                </PokemonNumber>
                <Button
                    onClick={(e) => {
                        e.stopPropagation();
                        mode === ADD
                            ? catchHandler(pokeData, koreanName)
                            : releaseHandler(pokeId, koreanName)
                    }}
                >
                    {mode === ADD ? "잡기" : "놔주기"}
                </Button>
            </Card>
        </>
    );
}

export default PokemonCard;
