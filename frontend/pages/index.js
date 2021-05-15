import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

import SliderVis from "../components/slider-visual.js";
import Header from "../components/header";
import PositioningCard from "../components/positioning-card";

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <SliderVis />
      <PositioningContainer>
        <PositioningCard isMove={true} />
        <PositioningCard isMove={false} />
      </PositioningContainer>
    </PageContainer>
  );
}

/* STYLES */
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0 auto;

  background-color: #111827;
`;

const PositioningContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
