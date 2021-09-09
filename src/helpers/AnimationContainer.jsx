import React from "react";
import styled from "styled-components";

import ReloaContext from "../contexts/ReloaContext";

const DivContainer = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.size ?? "4em"};
  height: ${(props) => props.size ?? "4em"};
`;

const AnimationContainer = ({
  className,
  children,
  size: sizeProperty = null,
}) => {
  const { size: sizeContext = null } = React.useContext(ReloaContext) ?? {};

  return (
    <DivContainer className={className} size={sizeProperty ?? sizeContext}>
      {children}
    </DivContainer>
  );
};

export default AnimationContainer;
