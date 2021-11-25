import React, { useCallback } from "react";
import styled, { css, keyframes } from "styled-components";

import ReloaContext from "../contexts/ReloaContext";

import AnimationContainer from "../helpers/AnimationContainer";

import { SPEED } from "../utils/consts";

const circlesArray = Array.from(Array(6).keys());

const spinKeyframes = keyframes`
  100% {
    transform: rotateZ(360deg);
  }
`;

const DivCircle = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;

  ${circlesArray.map(
    (circle, _, array) => css`
      &:nth-child(${circle + 1}) {
        z-index: calc(10 - ${circle + 1});

        ${({ speed }) => {
          return css`
            animation: ${spinKeyframes} ${speed}s
              calc(${speed}s / 4 / ${array.length} * ${circle}) infinite;
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

  &::before {
    content: "";
    display: block;
    border-radius: 50%;
    background: currentColor;
  }

  ${circlesArray.map(
    (circle) => css`
      &:nth-child(${circle + 1})::before {
        width: calc(20% - 2.5% * ${circle});
        height: calc(20% - 2.5% * ${circle});
        opacity: calc(1 - 0.1 * ${circle});
        margin: calc(${circle} * 1.25%) 0;
      }
    `,
  )}
`;

const SpinningCircles = ({
  size: sizeProperty = null,
  colorScale: colorScaleProperty = null,
  speed: speedProperty = null,
}) => {
  const { colorScale: colorScaleContext = null, speed: speedContext = null } =
    React.useContext(ReloaContext) ?? {};

  const calcElementSpeed = useCallback((speed = SPEED) => {
    return (
      speed /
      (1 + circlesArray[circlesArray.length - 1] / (4 * circlesArray.length))
    );
  }, []);

  return (
    <AnimationContainer size={sizeProperty} colorScale={colorScaleProperty}>
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
    </AnimationContainer>
  );
};

export default SpinningCircles;
