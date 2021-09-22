import React from "react";
import styled, { keyframes } from "styled-components";

import AnimationContainer from "../helpers/AnimationContainer";

const rotateKeyframes = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const borderRadiusKeyframes = keyframes`
  0%, 100% {
    border-radius: 0 50%;
  }

  50% {
    border-radius: 100%;
  }
`;

const DivFlower = styled(AnimationContainer)`
  display: grid;
`;

const DivLevel = styled.div`
  display: grid;
  grid-area: 1 / 1;

  &:nth-child(1) {
    width: 60%;
    height: 60%;
    margin: auto;
    animation: ${rotateKeyframes} 5s infinite linear;
  }

  &:nth-child(2) {
    width: 80%;
    height: 80%;
    margin: auto;
    animation: ${rotateKeyframes} 5s infinite linear;
  }

  &:nth-child(3) {
    width: 100%;
    height: 100%;
    margin: auto;
    animation: ${rotateKeyframes} 5s infinite linear;
  }
`;

const DivPetal = styled.div`
  grid-area: 1 / 1;
  margin: auto;
  width: calc(100% / 1.414213562);
  height: calc(100% / 1.414213562);
  background: currentColor;
  border-radius: 0% 50%;
  opacity: 0.1;
  animation: ${borderRadiusKeyframes} 5s infinite linear;

  &:nth-child(2) {
    transform: rotate(45deg);
  }

  &:nth-child(3) {
    transform: rotate(90deg);
  }

  &:nth-child(4) {
    transform: rotate(135deg);
  }
`;

const New = () => {
  return (
    <DivFlower>
      <DivLevel>
        <DivPetal />
        <DivPetal />
        <DivPetal />
        <DivPetal />
      </DivLevel>
      <DivLevel>
        <DivPetal />
        <DivPetal />
        <DivPetal />
        <DivPetal />
      </DivLevel>
      <DivLevel>
        <DivPetal />
        <DivPetal />
        <DivPetal />
        <DivPetal />
      </DivLevel>
    </DivFlower>
  );
};

export default New;
