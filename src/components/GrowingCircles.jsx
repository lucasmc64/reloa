import React, { useCallback } from "react";
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
        ${({ speed }) => {
          return css`
            animation: ${blinkKeyframes} ${speed}s
              calc(${speed}s / 2 / ${array.length} * ${circle});
          `;
        }}
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

  const calcElementSpeed = useCallback((speed = SPEED) => {
    return (
      speed /
      (circlesArray.length +
        circlesArray.reduce((accumulator, currentValue, _, array) => {
          return accumulator + currentValue / (2 * array.length);
        }))
    );
  }, []);

  return (
    <DivCircles size={sizeProperty} colorScale={colorScaleProperty}>
      {circlesArray.map((circle) => (
        <DivCircle
          key={circle}
          colorScale={colorScaleProperty ?? colorScaleContext}
          speed={
            speedProperty
              ? calcElementSpeed(speedProperty)
              : speedContext
              ? calcElementSpeed(speedContext)
              : calcElementSpeed()
          }
        />
      ))}
    </DivCircles>
  );
};

export default GrowingCircles;
