import React from 'react'
import styled, { keyframes } from 'styled-components'

import DivContainer from '../helpers/Container'

const blinkKeyframes = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0;
    transform: scale(0);
  }
  
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const DivDots = styled(DivContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DivDot = styled.div`
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background: #d2d2d8;

  &:nth-child(1) {
    animation: ${blinkKeyframes} 1s infinite;
  }

  &:nth-child(2) {
    animation: ${blinkKeyframes} 1s calc(1s / 4 * 1) infinite;
  }

  &:nth-child(3) {
    animation: ${blinkKeyframes} 1s calc(1s / 4 * 2) infinite;
  }
`

const EllipsisBlinking = ({ baseSize = null }) => {
  return (
    <DivDots baseSize={baseSize}>
      <DivDot />
      <DivDot />
      <DivDot />
    </DivDots>
  )
}

export default EllipsisBlinking
