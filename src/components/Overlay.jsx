import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const fadeTime = 200; // In ms

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
  transition: opacity ${fadeTime}ms linear;
  opacity: ${(props) => (props.show ? 1 : 0)};
`;

const CustomBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Overlay = ({
  className,
  children,
  show = true,
  animate = null,
  hideScrollBar = true,
}) => {
  const [isFadeInEnded, setIsFadeInEnded] = useState(
    animate !== "fadeIn" && animate !== "fadeInOut",
  );
  const [isFadeOutEnded, setIsFadeOutEnded] = useState(
    animate !== "fadeOut" && animate !== "fadeInOut",
  );

  useEffect(() => {
    if (!animate) {
      setIsFadeOutEnded(true);
    } else {
      if (animate === "fadeIn" || animate === "fadeInOut") {
        if (!show) {
          setIsFadeInEnded(false);
        } else {
          setIsFadeInEnded(true);
        }
      }

      if (animate === "fadeOut" || animate === "fadeInOut") {
        if (!show) {
          const timer = setTimeout(() => {
            setIsFadeOutEnded(true);
          }, fadeTime);

          return () => clearTimeout(timer);
        } else {
          setIsFadeOutEnded(false);
        }
      }
    }
  }, [show]);

  if (!show && isFadeOutEnded) return null;
  else
    return (
      <React.Fragment>
        {hideScrollBar ? <CustomBody /> : null}

        <DivOverlay className={className} show={show && isFadeInEnded}>
          {children}
        </DivOverlay>
      </React.Fragment>
    );
};

export default Overlay;
