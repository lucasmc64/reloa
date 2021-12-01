import React from "react";
import styled from "styled-components";

import ReloaContext from "../contexts/ReloaContext";

const DivContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  color: ${(props) => props.colorScale};
`;

const AnimationContainer = ({
  className,
  children,
  size: sizeProperty = null,
  colorScale: colorScaleProperty = null,
}) => {
  const { size: sizeContext = null, colorScale: colorScaleContext = null } =
    React.useContext(ReloaContext) ?? {};

  return (
    <DivContainer
      className={className}
      size={sizeProperty ?? sizeContext ?? "4em"}
      colorScale={
        colorScaleProperty && !Array.isArray(colorScaleProperty)
          ? colorScaleProperty
          : colorScaleContext && !Array.isArray(colorScaleContext)
          ? colorScaleContext
          : "#d2d2d8"
      }
    >
      {children}
    </DivContainer>
  );
};

export default AnimationContainer;
