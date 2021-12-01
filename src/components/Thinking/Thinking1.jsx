import React from "react";
import styled, { css, keyframes } from "styled-components";

import { GenericDivDot, Thinking } from "./Thinking";

const dotsArray = Array.from(Array(3).keys());

const blinkKeyframes = keyframes`
  50% {
    opacity: 0;
    transform: scale(0);
  }
`;

const DivDot = styled(GenericDivDot)`
  ${dotsArray.map((dot, _, array) => {
    return css`
      &:nth-child(${dot + 1}) {
        ${({ colorScale, speed: animationSpeed }) => {
          const elementSpeed =
            animationSpeed /
            (1 + dotsArray[dotsArray.length - 1] / (dotsArray.length + 1));

          return css`
            ${Array.isArray(colorScale) && colorScale.length
              ? `color: ${colorScale[dot % colorScale.length]};`
              : ""}

            animation: ${blinkKeyframes} ${elementSpeed}s
              calc(${elementSpeed}s / ${array.length + 1} * ${dot}) infinite;
          `;
        }}
      }
    `;
  })}
`;

const Thinking1 = (props) => (
  <Thinking divDot={DivDot} dotsArray={dotsArray} {...props} />
);

export default Thinking1;
