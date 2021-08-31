import React from 'react'
import styled, { keyframes } from 'styled-components'

import DivContainer from '../helpers/Container'

const spinKeyframes = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const changeShapeKeyframes = keyframes`
  0% {
    clip-path: polygon(50% 50%, 100% 0%, 100% 0%, 100% 100%, 100% 100%);
  }

  50% {
    clip-path: polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }

  100% {
    clip-path: polygon(50% 50%, 100% 0%, 100% 0%, 100% 100%, 100% 100%);
  }
`

const DivSemicircle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, transparent 50%, #d2d2d8 50%);
  border-radius: 50%;
  position: relative;
  animation: ${spinKeyframes} 1.5s infinite linear,
    ${changeShapeKeyframes} 1.5s infinite linear;
`

const SpinningSemicircle = ({ proportion = null }) => {
  return (
    <DivContainer proportion={proportion}>
      <DivSemicircle />
    </DivContainer>
  )
}

export default SpinningSemicircle
