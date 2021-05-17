import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

import SliderVis from "../components/slider-visual.js";
import Header from "../components/header";
import PositioningCard from "../components/positioning-card";
import Button from "../components/button";
import TravelHomeButton from "../components/buttons/home";
import UnlockMotorsButton from "../components/buttons/unlock";
import AddKeyframeButton from "../components/buttons/add-keyframe";

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <SliderVis />
      <Row>
        <PositioningCard isMove={true} />
        <PositioningCard isMove={false} />
      </Row>
      <Row>
        <UnlockMotorsButton />
        <TravelHomeButton />
      </Row>
      <Row>
        <AddKeyframeButton />
      </Row>
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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
