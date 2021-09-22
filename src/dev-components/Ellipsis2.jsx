import React from "react";
import styled, { css, keyframes } from "styled-components";

import AnimationContainer from "../helpers/AnimationContainer";

const dotsArray = Array.from(Array(3).keys());

const jumpKeyframes = keyframes`
  0%, 100% {
    top: 0;
  }

  50% {
    top: -20%;
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
  position: relative;
  inset: 0;

  ${dotsArray.map(
    (dot, _, array) => css`
      &:nth-child(${dot + 1}) {
        animation: ${jumpKeyframes} 1.25s
          calc(1.25s / ${array.length + 1} * ${dot}) infinite ease-in-out;

        ${(props) => {
          if (Array.isArray(props.colorScale)) {
            return css`
              color: ${props.colorScale[dot % props.colorScale.length]};
            `;
          }
        }}
      }
    `,
  )}
`;

const Ellipsis2 = (props) => {
  return (
    <DivDots {...props}>
      {dotsArray.map((dot) => (
        <DivDot key={dot} {...props} />
      ))}
    </DivDots>
  );
};

export default Ellipsis2;
