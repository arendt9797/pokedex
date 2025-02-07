import styled from "styled-components";
import GlobalStyle from "../style/globalStyle.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import pokeData from "../data/PokemonData.js";
import typeData from "../data/TypeData.js";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonProvider.jsx";

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
    cursor: default;
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
    cursor: default;
`;
const DetailType = styled.div`
    width: 50px;
    margin-right: 10px;
    padding: 6px;
    border-radius: 5px;
    background-color: ${({ color }) => color};
    color: white;
    text-align: center;
`;
const DetailDescriptionGrid = styled.p`
    grid-area: description;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    line-height: 24px;
    position: relative;
    cursor: default;
`;
const BackButton = styled.button`
    width: 80px;
    height: 30px;
    position: absolute;
    right: 30px;
    bottom: 20px;
    color: #ee5351;
    background-color: #eeeeee;
    border: transparent;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 5px;

    &:hover {
        background-color: #cfcfcf;
    }
`;
const CatchButton = styled.button`
    width: 80px;
    height: 30px;
    position: absolute;
    right: 120px;
    bottom: 20px;
    color: white;
    background-color: #ee5351;
    border: transparent;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 5px;

    &:hover {
        background-color: #e73a37;
    }
`;

function Detail() {
    // context를 사용하면 별개의 페이지에서도 문제없이 상태를 사용할 수 있다.
    const { catchMyPokemonsHandler } = useContext(PokemonContext);

    const navigate = useNavigate();
    const location = useLocation();

    // id를 이용해 detail 페이지에 표시할 포켓몬 데이터 찾기
    // 쿼리 스트링으로 전달했으므로 URLSearchParams()를 이용하여 id를 찾는다.
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
                    <DetailId> {`No.${pokeId}`} </DetailId>
                    <DetailName>{pokeName}</DetailName>
                </DetailNameGrid>
                <DetailTypeGrid>
                    {/* 포켓몬 타입 컴포넌트를 반복문으로 표시 */}
                    {pokeTypes.map((type) => (
                        <DetailType
                            key={crypto.randomUUID()}
                            color={typeData[type]}
                        >
                            {type}
                        </DetailType>
                    ))}
                </DetailTypeGrid>
                <DetailDescriptionGrid>
                    {pokeDescription}
                    {/* dex 페이지로 돌아가기 */}
                    <CatchButton onClick={() => catchMyPokemonsHandler(targetPokemon, pokeName)}>
                        {"잡기"}
                    </CatchButton>
                    <BackButton
                        onClick={() => {
                            navigate("/dex");
                        }}
                    >
                        {"돌아가기"}
                    </BackButton>
                </DetailDescriptionGrid>
            </PokeDetail>
        </>
    );
}

export default Detail;
