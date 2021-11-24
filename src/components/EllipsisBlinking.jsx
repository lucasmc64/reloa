import React, { useCallback } from "react";
import styled, { css, keyframes } from "styled-components";

import ReloaContext from "../contexts/ReloaContext";

import AnimationContainer from "../helpers/AnimationContainer";

import { SPEED } from "../utils/consts";

const dotsArray = Array.from(Array(3).keys());

const blinkKeyframes = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0;
    transform: scale(0);
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
  background: currentColor;

  ${dotsArray.map((dot, _, array) => {
    return css`
      &:nth-child(${dot + 1}) {
        ${({ speed }) => {
          return css`
            animation: ${blinkKeyframes} ${speed}s
              calc(${speed}s / ${array.length + 1} * ${dot});
          `;
        }}
        ${({ colorScale }) => {
          if (Array.isArray(colorScale) && colorScale.length) {
            return css`
              color: ${colorScale[dot % colorScale.length]};
            `;
          }
        }}
      }
    `;
  })}
`;

const EllipsisBlinking = ({
  size: sizeProperty = null,
  colorScale: colorScaleProperty = null,
  speed: speedProperty = null,
}) => {
  const { colorScale: colorScaleContext = null, speed: speedContext = null } =
    React.useContext(ReloaContext) ?? {};

  const calcElementSpeed = useCallback((speed = SPEED) => {
    return (
      speed / (1 + dotsArray[dotsArray.length - 1] / (dotsArray.length + 1))
    );
  }, []);

  return (
    <DivDots size={sizeProperty} colorScale={colorScaleProperty}>
      {dotsArray.map((dot) => (
        <DivDot
          key={dot}
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
    </DivDots>
  );
};

export default EllipsisBlinking;
