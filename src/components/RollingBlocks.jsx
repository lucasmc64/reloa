import React from "react";
import styled, { keyframes } from "styled-components";

import DivContainer from "../helpers/Container";

const block1Keyframes = keyframes`
  0% {
    top: 0%;
    left: 0%;
  }

  25% {
    top: 0%;
    left: 100%;
    transform: rotateZ(180deg);
  }

  50% {
    top: 100%;
    left: 100%;
    transform: rotateZ(360deg);
  }

  75% {
    top: 100%;
    left: 0%;
    transform: rotateZ(540deg);
  }

  100% {
    top: 0%;
    left: 0%;
    transform: rotateZ(720deg);
  }
`;

const block2Keyframes = keyframes`
  0% {
    top: 0%;
    left: 0%;
  }

  25% {
    top: -100%;
    left: 0%;
    transform: rotateZ(180deg);
  }

  50% {
    top: -100%;
    left: 100%;
    transform: rotateZ(360deg);
  }

  75% {
    top: 0%;
    left: 100%;
    transform: rotateZ(540deg);
  }

  100% {
    top: 0%;
    left: 0%;
    transform: rotateZ(720deg);
  }
`;

const block3Keyframes = keyframes`
  0% {
    top: 0%;
    left: 0%;
  }

  25% {
    top: 0%;
    left: -100%;
    transform: rotateZ(180deg);
  }

  50% {
    top: -100%;
    left: -100%;
    transform: rotateZ(360deg);
  }

  75% {
    top: -100%;
    left: 0%;
    transform: rotateZ(540deg);
  }

  100% {
    top: 0%;
    left: 0%;
    transform: rotateZ(720deg);
  }
`;

const DivBlocks = styled(DivContainer)`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
`;

const DivBlock = styled.div`
  position: relative;
  background: transparent;
  background: #d2d2d8;
  border-radius: 25%;
  margin: 7.5%;

  &:nth-child(1) {
    grid-area: 1 / 1;
    animation: ${block1Keyframes} 5s infinite;
  }

  &:nth-child(2) {
    grid-area: 2 / 1;
    animation: ${block2Keyframes} 5s calc(5s / 4 / 3) infinite;
  }

  &:nth-child(3) {
    grid-area: 2 / 2;
    animation: ${block3Keyframes} 5s calc(5s / 4 / 3 * 2) infinite;
  }
`;

const RollingBlocks = ({ baseSize = null }) => {
  return (
    <DivBlocks baseSize={baseSize}>
      <DivBlock />
      <DivBlock />
      <DivBlock />
    </DivBlocks>
  );
};

export default RollingBlocks;
