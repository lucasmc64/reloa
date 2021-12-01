import React from "react";
import styled, { css, keyframes } from "styled-components";

import { GenericDivDot, Thinking } from "./Thinking";

const dotsArray = Array.from(Array(3).keys());

const moveKeyframes = keyframes`
  0% {
    right: 0;
    transform: translateX(0%);
  }
  
  100% {
    right: 100%;
    transform: translateX(100%);
  }
`;

const DivDot = styled(GenericDivDot)`
  position: absolute;

  &:nth-child(1) {
    animation: ${moveKeyframes} 1.25s infinite alternate ease-in-out;
  }

  &:nth-child(2) {
    right: 50%;
    transform: translateX(50%);
  }

  &:nth-child(3) {
    animation: ${moveKeyframes} 1.25s infinite alternate-reverse ease-in-out;
  }

  ${dotsArray.map(
    (dot, _, array) => css`
      &:nth-child(${dot + 1}) {
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

const Thinking3 = (props) => (
  <Thinking divDot={DivDot} dotsArray={dotsArray} {...props} />
);

export default Thinking3;
