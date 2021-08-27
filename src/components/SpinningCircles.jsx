import React from 'react'
import styled, { keyframes } from 'styled-components'

const spinKeyframes = keyframes`
  100% {
    transform: rotateZ(360deg);
  }
`

const DivCircles = styled.div`
  width: 4em;
  height: 4em;
  padding: 0.5em;
`

const DivCircle = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;

  &:nth-child(1) {
    animation: ${spinKeyframes} 2.5s infinite;
  }

  &:nth-child(2) {
    animation: ${spinKeyframes} 2.5s calc(2.5s / 20 * 1) infinite;
  }

  &:nth-child(3) {
    animation: ${spinKeyframes} 2.5s calc(2.5s / 20 * 2) infinite;
  }

  &:nth-child(4) {
    animation: ${spinKeyframes} 2.5s calc(2.5s / 20 * 3) infinite;
  }

  &:nth-child(5) {
    animation: ${spinKeyframes} 2.5s calc(2.5s / 20 * 4) infinite;
  }

  &::before {
    content: '';
    display: block;
    border-radius: 50%;
    background: #d2d2d8;
  }

  &:nth-child(1)::before {
    width: 0.8em;
    height: 0.8em;
  }

  &:nth-child(2)::before {
    width: 0.7em;
    height: 0.7em;
    opacity: 0.8;
    transform: translateY(0.05em);
  }

  &:nth-child(3)::before {
    width: 0.6em;
    height: 0.6em;
    opacity: 0.6;
    transform: translateY(0.1em);
  }

  &:nth-child(4)::before {
    width: 0.5em;
    height: 0.5em;
    opacity: 0.4;
    transform: translateY(0.15em);
  }

  &:nth-child(5)::before {
    width: 0.4em;
    height: 0.4em;
    opacity: 0.2;
    transform: translateY(0.2em);
  }
`

const SpinningCircles = () => {
  return (
    <DivCircles>
      <DivCircle />
      <DivCircle />
      <DivCircle />
      <DivCircle />
      <DivCircle />
    </DivCircles>
  )
}

export default SpinningCircles
