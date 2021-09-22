import React from "react";
import styled, { css, keyframes } from "styled-components";

import AnimationContainer from "../helpers/AnimationContainer";

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

const DivDots = styled(AnimationContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const DivDot = styled.div`
  width: 20%;
  height: 20%;
  border-radius: 50%;
  background: currentColor;
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

const Ellipsis3 = (props) => {
  return (
    <DivDots {...props}>
      {dotsArray.map((dot) => (
        <DivDot key={dot} {...props} />
      ))}
    </DivDots>
  );
};

export default Ellipsis3;
