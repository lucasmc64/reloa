import React from "react";
import styled, { keyframes } from "styled-components";

import AnimationContainer from "../helpers/AnimationContainer";

const DivCinema = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Cinema = () => {
  return (
    <AnimationContainer>
      <DivCinema />
    </AnimationContainer>
  );
};

export default Cinema;
