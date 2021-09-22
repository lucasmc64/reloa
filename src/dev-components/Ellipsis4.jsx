import React from "react";
import styled, { css, keyframes } from "styled-components";

import AnimationContainer from "../helpers/AnimationContainer";

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

const DivDots = styled(AnimationContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const DivDot = styled.div`
  width: 20%;
  height: 20%;
  border-radius: 50%;
  background: currentColor;
  position: absolute;

  ${dotsArray.map(
    (dot) => css`
      &:nth-child(${dot + 1}) {
        animation: ${moveDotsKeyframes[`moveDot${dot + 1}Keyframes`]} 1.25s
          infinite ease-in-out;

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

const Ellipsis4 = (props) => {
  return (
    <DivDots {...props}>
      {dotsArray.map((dot) => (
        <DivDot key={dot} {...props} />
      ))}
    </DivDots>
  );
};

export default Ellipsis4;
