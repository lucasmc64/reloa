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
              colorScale: ["#7159c1", "tomato", "green", "pink"],
            }}
          >
            <EllipsisBlinking speed={1} />
            <GrowingCircles speed={2} colorScale={["black", "pink"]} />
            <RollingBlocks speed={3} colorScale="pink" />
            <SpinningCircles speed={4} />
            <SpinningSemicircle speed={5} colorScale={["pink"]} />
          </ReloaContext.Provider>
        </div>
      </Overlay>

      <p style={{ height: "200vh" }}>Test 1, 2, 3!</p>
    </React.Fragment>
  );
};

export default App;
