import React from "react";

import {
  ReloaContext,
  Overlay,
  EllipsisBlinking,
  GrowingCircles,
  RollingBlocks,
  SpinningCircles,
  SpinningSemicircle,
} from "reloa";

const App = () => {
  return (
    <>
      <Overlay>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2.5em",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <ReloaContext.Provider value={{ size: "1em" }}>
            <EllipsisBlinking />
            <GrowingCircles />
            <RollingBlocks />
            <SpinningCircles />
            <SpinningSemicircle />
          </ReloaContext.Provider>
        </div>
      </Overlay>

      <p>Test 1, 2, 3!</p>
    </>
  );
};

export default App;
