import React from "react";

import {
  Overlay,
  EllipsisBlinking,
  GrowingCircles,
  RollingBlocks,
  SpinningCircles,
  SpinningSemicircle,
} from "reloa";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2.5rem",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <EllipsisBlinking />
      <GrowingCircles />
      <RollingBlocks />
      <SpinningCircles />
      <SpinningSemicircle />
    </div>
  );
};

export default App;
