import styled from "styled-components";

export default function Header() {
  return <CameraSliderText>Slider Control</CameraSliderText>;
}

/* STYLES */
const CameraSliderText = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@700&display=swap");

  font-family: 'Sulphur Point', sans-serif;
  font-size: 45px;
  line-height: 45px;
  text-align: center;

  background: -webkit-linear-gradient(right top, #ef4444, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
