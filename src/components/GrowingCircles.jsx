import React from "react";
import styled, { css, keyframes } from "styled-components";

import ReloaContext from "../contexts/ReloaContext";

import AnimationContainer from "../helpers/AnimationContainer";

import { SPEED } from "../utils/helpers";

const circlesArray = Array.from(Array(3).keys());

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
  background: currentColor;
  opacity: 0.5;

  ${circlesArray.map(
    (circle, _, array) => css`
      &:nth-child(${circle + 1}) {
        // 3 * 2.5 + 2.5 / 2 / 3
        animation: ${blinkKeyframes} 2.5s
          calc(2.5s / 2 / ${array.length} * ${circle}) infinite;

        ${({ colorScale }) => {
          if (Array.isArray(colorScale) && colorScale.length) {
            return css`
              color: ${colorScale[circle % colorScale.length]};
            `;
          }
        }}
      }
    `,
  )}
`;

const GrowingCircles = ({
  size: sizeProperty = null,
  colorScale: colorScaleProperty = null,
  speed: speedProperty = null,
}) => {
  const { colorScale: colorScaleContext = null, speed: speedContext = null } =
    React.useContext(ReloaContext) ?? {};

  return (
    <DivCircles size={sizeProperty} colorScale={colorScaleProperty}>
      {circlesArray.map((circle) => (
        <DivCircle
          key={circle}
          colorScale={colorScaleProperty ?? colorScaleContext}
        />
      ))}
    </DivCircles>
  );
};

export default GrowingCircles;
