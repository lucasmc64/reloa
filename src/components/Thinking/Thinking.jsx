import React, { useContext, Fragment } from "react";
import styled from "styled-components";

import ReloaContext from "../../contexts/ReloaContext";

import AnimationContainer from "../../helpers/AnimationContainer";

import { SPEED } from "../../utils/consts";

const GenericDivDots = styled(AnimationContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GenericDivDot = styled.div`
  width: 20%;
  height: 20%;
  border-radius: 50%;
  background: currentColor;
`;

const Thinking = ({
  divDots: DivDots = GenericDivDots,
  divDot: DivDot = GenericDivDot,
  dotsArray = [],
  colorScale: colorScaleProperty = null,
  size: sizeProperty = null,
  speed: speedProperty = null,
}) => {
  const { colorScale: colorScaleContext = null, speed: speedContext = null } =
    useContext(ReloaContext) ?? {};

  return (
    <Fragment>
      {DivDots ? (
        <DivDots size={sizeProperty} colorScale={colorScaleProperty}>
          {dotsArray.map((dot) => (
            <DivDot
              key={dot}
              colorScale={colorScaleProperty ?? colorScaleContext}
              speed={speedProperty ?? speedContext ?? SPEED}
            />
          ))}
        </DivDots>
      ) : null}
    </Fragment>
  );
};

export { GenericDivDots, GenericDivDot, Thinking };
