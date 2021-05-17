import styled from "styled-components";

export default function Button({ text, textId, buttonId, whenClicked }) {
  return (
    <ButtonContainer id={buttonId} onClick={() => { whenClicked() }}>
      <ButtonText id={textId} >{text}</ButtonText>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  width: 140px;
  height: 50px;

  padding: auto;
  margin: 0 20px;

  background-color: #f87171;
  border-radius: 5px;

  cursor: pointer;
  transition: 500ms;
`;

const ButtonText = styled.p`
  text-align: center;

  `;
