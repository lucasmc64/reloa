import React, { useEffect, useState } from "react";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //setInterval(() => setIsLoading((isLoading) => !isLoading), 2000);
  }, []);

  return (
    <React.Fragment>
      <Overlay show={isLoading} animate="fadeInOut">
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
          <ReloaContext.Provider
            value={{
              size: "4em",
              //colorScale: "blue",
              colorScale: ["#7159c1", "tomato", "green", "pink"],
            }}
          >
            <EllipsisBlinking />
            <GrowingCircles colorScale={["black", "pink"]} />
            <RollingBlocks colorScale="pink" />
            <SpinningCircles colorScale={"pink"} />
            <SpinningSemicircle colorScale={["pink"]} />
          </ReloaContext.Provider>
        </div>
      </Overlay>

      <p style={{ height: "200vh" }}>Test 1, 2, 3!</p>
    </React.Fragment>
  );
};

export default App;
