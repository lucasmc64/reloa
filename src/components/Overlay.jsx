import React from "react";
import styled from "styled-components";

const DivOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #f2f2f8;
  z-index: 999;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Overlay = ({ isLoading, children }) => {
  return <DivOverlay>{children}</DivOverlay>;
};

export default Overlay;
