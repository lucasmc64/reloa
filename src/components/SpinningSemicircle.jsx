import React from "react";
import styled, { css, keyframes } from "styled-components";

import ReloaContext from "../contexts/ReloaContext";

import AnimationContainer from "../helpers/AnimationContainer";

import { SPEED } from "../utils/consts";

const spinKeyframes = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const changeShapeKeyframes = keyframes`
  0% {
    clip-path: polygon(50% 50%, 100% 50%, 100% 50%, 100% 50%, 100% 50%, 100% 50%, 100% 50%);
  }
  
  25% {
    clip-path: polygon(50% 50%, 100% 0%, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
  }
  
  75% {
    clip-path: polygon(50% 50%, 0% 0%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%);
  }
  
  100% {
    clip-path: polygon(50% 50%, 0% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%);
  } 
`;

const SvgSemicircle = styled.svg`
  animation: ${changeShapeKeyframes} 1.25s infinite linear alternate,
    ${spinKeyframes} 1.25s infinite linear;
  ${({ colorScale }) => {
    if (Array.isArray(colorScale) && colorScale.length) {
      return css`
        color: ${colorScale[0]};
      `;
    }
  }};
`;

const SpinningSemicircle = ({
  size: sizeProperty = null,
  colorScale: colorScaleProperty = null,
  speed: speedProperty = null,
}) => {
  const { colorScale: colorScaleContext = null, speed: speedContext = null } =
    React.useContext(ReloaContext) ?? {};

  return (
    <AnimationContainer size={sizeProperty} colorScale={colorScaleProperty}>
      <SvgSemicircle
        width="100%"
        height="100%"
        colorScale={colorScaleProperty ?? colorScaleContext}
      >
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="10%"
        />
      </SvgSemicircle>
    </AnimationContainer>
  );
};

export default SpinningSemicircle;
