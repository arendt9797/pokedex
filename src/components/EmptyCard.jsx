import styled from "styled-components";
import emptyImage from "../img/empty_card.png"

const Card = styled.div`
    width: 140px;
    height: 210px;
    background-image: url(${emptyImage});
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
`;

function EmptyCard() {
    return <Card />;
}

export default EmptyCard;
