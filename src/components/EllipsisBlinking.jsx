import React from "react";
import styled, { keyframes } from "styled-components";

import AnimationContainer from "../helpers/AnimationContainer";

const blinkKeyframes = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0;
    transform: scale(0);
  }
  
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const DivDots = styled(AnimationContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DivDot = styled.div`
  width: 20%;
  height: 20%;
  border-radius: 50%;
  background: #d2d2d8;

  &:nth-child(1) {
    animation: ${blinkKeyframes} 1.25s infinite;
  }

  &:nth-child(2) {
    animation: ${blinkKeyframes} 1.25s calc(1.25s / 4 * 1) infinite;
  }

  &:nth-child(3) {
    animation: ${blinkKeyframes} 1.25s calc(1.25s / 4 * 2) infinite;
  }
`;

const EllipsisBlinking = () => {
  return (
    <DivDots>
      <DivDot />
      <DivDot />
      <DivDot />
    </DivDots>
  );
};

export default EllipsisBlinking;
