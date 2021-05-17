import styled from "styled-components";
import axios from "axios";
import Button from "../button";
import { useEffect } from "react";

const apiBaseUrl = "/api/movement";

export default function UnlockMotorsButton() {
  useEffect(() => {
    let buttonElement = document.getElementById("unlock-motors");
    buttonElement.style.backgroundColor = "#6B7280";
  }, []);

  return (
    <Button
      textId={"unlock-motors-text"}
      buttonId={"unlock-motors"}
      text={"Unlock Motors"}
      whenClicked={() => {
        handleClick();
      }}
    />
  );
}

function handleClick() {
  let textElement = document.getElementById("unlock-motors-text");
  let buttonElement = document.getElementById("unlock-motors");
  axios
    .get(`${apiBaseUrl}/unlock`)
    .then((res) => {
      buttonElement.style.backgroundColor = "#10B981";
      setTimeout(() => {
        textElement.innerHTML = "Success!";
        setTimeout(() => {
          buttonElement.style.backgroundColor = "#6B7280";
          setTimeout(() => {
            textElement.innerHTML = "Unlock Motors";
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
            textElement.innerHTML = "Unlock Motors";
          }, 150);
        }, 1000);
      }, 150);
    });
}
