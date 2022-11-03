import {
  EllipsisBlinking,
  Overlay,
  GrowingCircles,
  RollingBlocks,
  SpinningCircles,
  SpinningSemicircle,
} from "reloa";

function App() {
  return (
    <Overlay>
      <EllipsisBlinking />
      <GrowingCircles />
      <RollingBlocks />
      <SpinningCircles />
      <SpinningSemicircle />
    </Overlay>
  );
}

export default App;

