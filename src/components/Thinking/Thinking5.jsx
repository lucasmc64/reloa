import React from "react";
import styled, { css, keyframes } from "styled-components";

import { Thinking } from "./Thinking";

const dotsArray = Array.from(Array(3).keys());

const flattenDotKeyframes = keyframes`
  50% {
    height: 50%;
  }
`;

const DivDot = styled.div`
  width: 20%;
  height: 20%;
  display: flex;
  align-items: flex-end;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: currentColor;
  }

  ${dotsArray.map(
    (dot, _, array) => css`
      &:nth-child(${dot + 1})::before {
        animation: ${flattenDotKeyframes} 1.25s
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

const Thinking5 = (props) => (
  <Thinking divDot={DivDot} dotsArray={dotsArray} {...props} />
);

export default Thinking5;
