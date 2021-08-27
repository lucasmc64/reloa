import React from 'react'

import {
  Overlay,
  EllipsisBlinking,
  RollingBlocks,
  GrowingCircles,
  SpinningCircles,
  SpinningSemicircle
} from 'sweet-loading'

const App = () => {
  return (
    <Overlay>
      <EllipsisBlinking />
      <RollingBlocks />
      <GrowingCircles />
      <SpinningCircles />
      <SpinningSemicircle />
    </Overlay>
  )
}

export default App
