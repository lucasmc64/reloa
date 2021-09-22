import React from "react";
import styled, { css, keyframes } from "styled-components";

import ReloaContext from "../contexts/ReloaContext";

import AnimationContainer from "../helpers/AnimationContainer";

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

  ${dotsArray.map(
    (dot, _, array) => css`
      &:nth-child(${dot + 1}) {
        animation: ${blinkKeyframes} 1.25s
          calc(1.25s / ${array.length + 1} * ${dot}) infinite;

        ${({ colorScale }) => {
          if (Array.isArray(colorScale) && colorScale.length) {
            return css`
              color: ${colorScale[dot % colorScale.length]};
            `;
          }
        }}
      }
    `,
  )}
`;

const EllipsisBlinking = ({
  size: sizeProperty = null,
  colorScale: colorScaleProperty = null,
}) => {
  const { colorScale: colorScaleContext = null } =
    React.useContext(ReloaContext) ?? {};

  return (
    <DivDots size={sizeProperty} colorScale={colorScaleProperty}>
      {dotsArray.map((dot) => (
        <DivDot
          key={dot}
          colorScale={colorScaleProperty ?? colorScaleContext}
        />
      ))}
    </DivDots>
  );
};

export default EllipsisBlinking;
