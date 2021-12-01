import React from "react";
import styled, { css, keyframes } from "styled-components";

import { GenericDivDot, Thinking } from "./Thinking";

const dotsArray = Array.from(Array(4).keys());

const moveDotsKeyframes = {
  moveDot1Keyframes: keyframes`
    0% {
      right: 100%;
      transform: translateX(0);
    }

    100% {
      right: 100%;
      transform: translateX(100%);
    }
  `,
  moveDot2Keyframes: keyframes`
    0% {
      right: 100%;
      transform: translateX(100%);
    }

    100% {
      right: 50%;
      transform: translateX(50%);
    }
  `,
  moveDot3Keyframes: keyframes`
    0% {
      right: 50%;
      transform: translateX(50%);
    }

    100% {
      right: 0;
      transform: translateX(0);
    }
  `,
  moveDot4Keyframes: keyframes`
    0% {
      right: 0;
      transform: translateX(0);
    }
    
    100% {
      right: 0;
      transform: translateX(100%);
    }
  `,
};

const DivDot = styled(GenericDivDot)`
  position: absolute;

  ${dotsArray.map(
    (dot) => css`
      &:nth-child(${dot + 1}) {
        animation: ${moveDotsKeyframes[`moveDot${dot + 1}Keyframes`]} 1.25s
          infinite ease-in-out;

        ${({ colorScale, speed: animationSpeed }) => {
          return css`
            ${Array.isArray(colorScale) && colorScale.length
              ? `color: ${colorScale[dot % colorScale.length]};`
              : ""}
          `;
        }}
      }
    `,
  )}
`;

const Thinking4 = (props) => (
  <Thinking divDot={DivDot} dotsArray={dotsArray} {...props} />
);

export default Thinking4;
