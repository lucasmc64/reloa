import React from "react";
import styled, { keyframes } from "styled-components";

import ReloaContext from "../contexts/ReloaContext";

import DivContainer from "../helpers/Container";

const spinKeyframes = keyframes`
  100% {
    transform: rotateZ(360deg);
  }
`;

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
    content: "";
    display: block;
    border-radius: 50%;
    background: #d2d2d8;
  }

  &:nth-child(1)::before {
    width: 20%;
    height: 20%;
  }

  &:nth-child(2)::before {
    width: 17.5%;
    height: 17.5%;
    opacity: 0.8;
    transform: translateY(1.25%);
  }

  &:nth-child(3)::before {
    width: 15%;
    height: 15%;
    opacity: 0.6;
    transform: translateY(2.5%);
  }

  &:nth-child(4)::before {
    width: 12.5%;
    height: 12.5%;
    opacity: 0.4;
    transform: translateY(3.75%);
  }

  &:nth-child(5)::before {
    width: 10%;
    height: 10%;
    opacity: 0.2;
    transform: translateY(5%);
  }
`;

const SpinningCircles = ({ size: sizeProperty = null }) => {
  const { size: sizeContext = null } =
    React.useContext(ReloaContext) ?? {};

  return (
    <DivContainer size={sizeProperty ?? sizeContext}>
      <DivCircle />
      <DivCircle />
      <DivCircle />
      <DivCircle />
      <DivCircle />
    </DivContainer>
  );
};

export default SpinningCircles;
