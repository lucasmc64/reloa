import React from 'react'
import styled, { keyframes } from 'styled-components'

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

const DivDots = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 4em;
  height: 4em;
  padding: 0.5em;
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

const EllipsisBlinking = () => {
  return (
    <DivDots>
      <DivDot />
      <DivDot />
      <DivDot />
    </DivDots>
  )
}

export default EllipsisBlinking
