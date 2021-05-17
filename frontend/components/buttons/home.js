import styled from "styled-components";
import axios from "axios";
import Button from "../button";
import { useEffect } from "react";

const apiBaseUrl = "/api/movement";

export default function TravelHomeButton() {
  useEffect(() => {
    let buttonElement = document.getElementById("travel-home");
    buttonElement.style.backgroundColor = "#6B7280";
  }, []);

  return (
    <Button
      textId={"travel-home-text"}
      buttonId={"travel-home"}
      text={"Travel Home"}
      whenClicked={() => {
        handleClick();
      }}
    />
  );
}

function handleClick() {
  let textElement = document.getElementById("travel-home-text");
  let buttonElement = document.getElementById("travel-home");
  axios
    .get(`${apiBaseUrl}/home`)
    .then((res) => {
      buttonElement.style.backgroundColor = "#10B981";
      setTimeout(() => {
        textElement.innerHTML = "Success!";
        setTimeout(() => {
          buttonElement.style.backgroundColor = "#6B7280";
          setTimeout(() => {
            textElement.innerHTML = "Travel Home";
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
            textElement.innerHTML = "Travel Home";
          }, 150);
        }, 1000);
      }, 150);
    });
}
