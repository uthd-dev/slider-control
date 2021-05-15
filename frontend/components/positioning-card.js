import { useEffect } from 'react';
import styled from 'styled-components';

export default function PositioningCard ({ isMove }) {
    useEffect(() => {

    }, [])

    return (
        <Card>
            <Title>{ isMove ? "Move" : "Rotate" }</Title>
            <ButtonsContainer>
                <ButtonLeft onMouseDown={() => handleClick(isMove, true)} />
                <ButtonRight  onMouseDown={() => handleClick(isMove, false)} />
            </ButtonsContainer>
        </Card>
    );
}

/* LOGIC */
function handleClick(isMove, isLeft) {
    if (isMove) {
        alert("This doesn't do anything yet!");
    }else {

    }
}

/* STYLES */
const Card = styled.div`
    height: 140px;
    width: 100px;

    border-radius: 5px;

    background-color: #36454F;
`;

const Title = styled.h5`
    text-align: center;
    color: #E5E5E5;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 10%;
`;

const ButtonLeft = styled.div`
    height: 0;
    width: 0;
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent; 
    border-right: 25px solid #C4C4C4;
    :hover {
        cursor: pointer;
    }
`;

const ButtonRight = styled.div`
    height: 0;
    width: 0;
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent; 
    border-left: 25px solid #C4C4C4;
    :hover {
        cursor: pointer;
    }
`;