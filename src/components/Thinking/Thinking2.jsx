import React from "react";
import styled, { css, keyframes } from "styled-components";

import { GenericDivDot, Thinking } from "./Thinking";

const dotsArray = Array.from(Array(3).keys());

const jumpKeyframes = keyframes`
  50% {
    top: -20%;
  }
`;

const DivDot = styled(GenericDivDot)`
  position: relative;
  inset: 0;

  ${dotsArray.map(
    (dot, _, array) => css`
      &:nth-child(${dot + 1}) {
        animation: ${jumpKeyframes} 1.25s
          calc(1.25s / ${array.length + 1} * ${dot}) infinite ease-in-out;

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

const Thinking2 = (props) => (
  <Thinking divDot={DivDot} dotsArray={dotsArray} {...props} />
);

export default Thinking2;
