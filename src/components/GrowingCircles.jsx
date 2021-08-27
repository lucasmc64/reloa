import React from 'react'
import styled, { keyframes } from 'styled-components'

const blinkKeyframes = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0);
  }
  
  100% {
    transform: scale(1);
  }
`

const DivCircles = styled.div`
  position: relative;
  width: 4em;
  height: 4em;
  padding: 0.5em;
`

const DivCircle = styled.div`
  position: absolute;
  width: 4em;
  height: 4em;
  border-radius: 50%;
  background: #d2d2d8;
  opacity: 0.5;

  &:nth-child(1) {
    animation: ${blinkKeyframes} 2s infinite;
  }

  &:nth-child(2) {
    animation: ${blinkKeyframes} 2s calc(2s / 2 / 3) infinite;
  }

  &:nth-child(3) {
    animation: ${blinkKeyframes} 2s calc(2s / 2 / 3 * 2) infinite;
  }
`

const GrowingCircles = () => {
  return (
    <DivCircles>
      <DivCircle />
      <DivCircle />
      <DivCircle />
    </DivCircles>
  )
}

export default GrowingCircles
