import React, { useCallback } from "react";
import styled, { css, keyframes } from "styled-components";

import ReloaContext from "../contexts/ReloaContext";

import AnimationContainer from "../helpers/AnimationContainer";

import { SPEED } from "../utils/consts";

const blocksArray = Array.from(Array(3).keys());

const blocksKeyframes = {
  block1Keyframes: keyframes`
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
  `,
  block2Keyframes: keyframes`
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
  `,
  block3Keyframes: keyframes`
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
  `,
};

const DivBlocks = styled(AnimationContainer)`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
`;

const DivBlock = styled.div`
  position: relative;
  background: currentColor;
  border-radius: 25%;
  margin: 7.5%;

  &:nth-child(1) {
    grid-area: 1 / 1;
  }

  &:nth-child(2) {
    grid-area: 2 / 1;
  }

  &:nth-child(3) {
    grid-area: 2 / 2;
  }

  ${blocksArray.map(
    (block) => css`
      &:nth-child(${block + 1}) {
        ${({ speed }) => {
          return css`
            animation: ${blocksKeyframes[`block${block + 1}Keyframes`]}
              ${speed}s calc(${speed}s / 4 / ${blocksArray.length} * ${block})
              infinite;
          `;
        }}

        ${({ colorScale }) => {
          if (Array.isArray(colorScale) && colorScale.length) {
            return css`
              color: ${colorScale[block % colorScale.length]};
            `;
          }
        }}
      }
    `,
  )}
`;

const RollingBlocks = ({
  size: sizeProperty = null,
  colorScale: colorScaleProperty = null,
  speed: speedProperty = null,
}) => {
  const { colorScale: colorScaleContext = null, speed: speedContext = null } =
    React.useContext(ReloaContext) ?? {};

  const calcElementSpeed = useCallback((speed = SPEED) => {
    return (
      speed /
      (1 + blocksArray[blocksArray.length - 1] / (4 * blocksArray.length))
    );
  }, []);

  return (
    <DivBlocks size={sizeProperty} colorScale={colorScaleProperty}>
      {blocksArray.map((block) => (
        <DivBlock
          key={block}
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
    </DivBlocks>
  );
};

export default RollingBlocks;
