import { useEffect } from "react";
import styled from "styled-components";
import styles from "./slider-visual.module.css";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function SliderComponent () {
    //Get stepper positions from backend
  const { data, error } = useSWR('/api/movement/positions/slider-position', fetcher, { refreshInterval: 1000 })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <SliderVis coords={data.positions.motorPositions}/>
}

function SliderVis({ coords }) {
  useEffect(() => {
    let translationStepTotal = coords.mot1 + coords.mot2;
    let translationNumber = translationStepTotal / 190000;
    let translationPercent = Math.round(translationNumber * 100);

    let rotationStepTotal = (coords.mot2 - coords.mot1) / 2;
    let rotationNumber = rotationStepTotal / 12000;
    let rotationPercent = Math.round(rotationNumber * 100);
    let rotationDegrees = Math.round(rotationPercent * 3.6);

    console.log(`Translation: ${translationPercent}`);
    console.log(`Rotation: ${rotationDegrees}`);

    document.getElementById(
      "carriage"
    ).style.left = `calc(${translationPercent}% - 40px)`;
    document.getElementById(
      "camera"
    ).style.transform = `rotate(${rotationDegrees}deg)`;
  }, [coords]);

  return (
    <Slider>
      <EndLeft className={`${styles.end}`} />
      <BarTop className={`${styles.bar}`} />
      <BarBottom className={`${styles.bar}`} />
      <EndRight className={`${styles.end}`} />
      <Track>
        <Carriage id="carriage">
          <Camera id="camera">
            <DirectionIndicator />
          </Camera>
        </Carriage>
      </Track>
    </Slider>
  );
}

/* STYLES */
const Slider = styled.div`
  position: relative;
  width: 70%;
  max-width: 500px;
  height: 60px;
`;

const EndLeft = styled.div``;
const EndRight = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
`;
const BarTop = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;
`;
const BarBottom = styled.div`
  position: absolute;
  bottom: 15px;
  left: 20px;
`;

const Track = styled.div`
    position: absolute;
    top: 0;
    left: 60px;

    width: calc(100% - 60px);
    height: 60px;
`;

const Carriage = styled.div`
  height: 40px;
  width: 40px;
  background-color: #36454f;

  position: absolute;
  top: 10px;
`;

const Camera = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #c4c4c4;

  position: relative;
  top: 5px;
  left: 5px;

  transform: rotate(30deg);
`;

const DirectionIndicator = styled.div`
  height: 10px;
  width: 3px;
  background-color: white;

  position: absolute;
  top: -4px;
  left: 12.5px;
`;
