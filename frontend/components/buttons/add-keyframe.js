import styled from "styled-components";
import axios from "axios";
import useSWR from "swr";
import Button from "../button";
import { useEffect } from "react";

const apiBaseUrl = "/api/movement/positions";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ButtonExport() {
  const { data, error } = useSWR("/api/movement/positions/slider-position", fetcher, {
    refreshInterval: 1000,
  });

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <AddKeyframeButton pos={data} />
}

function AddKeyframeButton({ pos }) {
  useEffect(() => {
    let buttonElement = document.getElementById("add-keyframe");
    buttonElement.style.backgroundColor = "#6B7280";
  }, []);

  return (
    <Button
      textId={"add-keyframe-text"}
      buttonId={"add-keyframe"}
      text={"Add Keyframe"}
      whenClicked={() => {
        handleClick(pos);
      }}
    />
  );
}

function handleClick(pos) {
  let textElement = document.getElementById("add-keyframe-text");
  let buttonElement = document.getElementById("add-keyframe");
  axios
    .post(`${apiBaseUrl}/add-keyframe`, {
      mot1: pos.positions.motorPositions.mot1,
      mot2: pos.positions.motorPositions.mot2,
    })
    .then((res) => {
      buttonElement.style.backgroundColor = "#10B981";
      setTimeout(() => {
        textElement.innerHTML = "Success!";
        setTimeout(() => {
          buttonElement.style.backgroundColor = "#6B7280";
          setTimeout(() => {
            textElement.innerHTML = "Add Keyframe";
          }, 150);
        }, 1000);
      }, 150);
    })
    .catch((err) => {
      console.log(err);

      buttonElement.style.backgroundColor = "#DC2626";

      setTimeout(() => {
        textElement.innerHTML = "Error";

        setTimeout(() => {
          buttonElement.style.backgroundColor = "#6B7280";
          setTimeout(() => {
            textElement.innerHTML = "Add Keyframe";
          }, 150);
        }, 1000);
      }, 150);
    });
}
