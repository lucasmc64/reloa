import React from "react";
import styled, { css, keyframes } from "styled-components";

import ReloaContext from "../contexts/ReloaContext";

import AnimationContainer from "../helpers/AnimationContainer";

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
        animation: ${spinKeyframes} 2.5s
          calc(2.5s / 4 / ${array.length} * ${circle}) infinite;
        z-index: calc(10 - ${circle + 1});

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
}) => {
  const { colorScale: colorScaleContext = null } =
    React.useContext(ReloaContext) ?? {};

  return (
    <AnimationContainer size={sizeProperty} colorScale={colorScaleProperty}>
      {circlesArray.map((circle) => (
        <DivCircle
          key={circle}
          colorScale={colorScaleProperty ?? colorScaleContext}
        />
      ))}
    </AnimationContainer>
  );
};

export default SpinningCircles;
