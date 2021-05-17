import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function PositioningCard({ isMove }) {
  useEffect(() => {}, []);

  return (
    <Card>
      <Title>{isMove ? "Move" : "Rotate"}</Title>
      <ButtonsContainer>
        <ButtonLeft
          onPointerUp={() => {
            handleMouseUp(isMove, true);
          }}
          onPointerDown={() => {
            handleMouseDown(isMove, true);
          }}
        />
        <ButtonRight
          onPointerUp={() => {
            handleMouseUp(isMove, false);
          }}
          onPointerDown={() => {
            handleMouseDown(isMove, false);
          }}
        />
      </ButtonsContainer>
    </Card>
  );
}

/* LOGIC */
const apiBaseURL = "http://localhost:3001/api/movement";

function handleMouseDown(isMove, isLeft) {
  if (isMove) {
    axios
      .get(`${apiBaseURL}/continuous-translate/press?forward=${isLeft}`)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  } else {
    axios
    .get(`${apiBaseURL}/continuous-rotate/press?clockwise=${isLeft ? false : true}`)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
  }
}

function handleMouseUp(isMove, isLeft) {
  if (isMove) {
    axios
      .get(`${apiBaseURL}/continuous-translate/release?forward=${isLeft}`)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  } else {
    axios
    .get(`${apiBaseURL}/continuous-rotate/release?clockwise=${isLeft ? false : true}`)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
  }
}

/* STYLES */
const Card = styled.div`
  height: 140px;
  width: 100px;
  margin: 20px;

  border-radius: 5px;

  background-color: #36454f;
`;

const Title = styled.h5`
  text-align: center;
  color: #e5e5e5;
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
  border-right: 25px solid #c4c4c4;
  :hover {
    cursor: pointer;
  }
`;

const ButtonRight = styled.div`
  height: 0;
  width: 0;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 25px solid #c4c4c4;
  :hover {
    cursor: pointer;
  }
`;
