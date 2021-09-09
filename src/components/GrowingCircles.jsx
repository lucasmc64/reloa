import React from "react";
import styled, { keyframes } from "styled-components";

import AnimationContainer from "../helpers/AnimationContainer";

const blinkKeyframes = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0);
  }
  
  100% {
    transform: scale(1);
  }
`;

const DivCircles = styled(AnimationContainer)`
  display: grid;
`;

const DivCircle = styled.div`
  grid-area: 1 / 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #d2d2d8;
  opacity: 0.5;

  &:nth-child(1) {
    animation: ${blinkKeyframes} 2.5s infinite;
  }

  &:nth-child(2) {
    animation: ${blinkKeyframes} 2.5s calc(2.5s / 2 / 3) infinite;
  }

  &:nth-child(3) {
    animation: ${blinkKeyframes} 2.5s calc(2.5s / 2 / 3 * 2) infinite;
  }
`;

const GrowingCircles = () => {
  return (
    <DivCircles>
      <DivCircle />
      <DivCircle />
      <DivCircle />
    </DivCircles>
  );
};

export default GrowingCircles;
