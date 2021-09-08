import styled from "styled-components";

const DivContainer = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.size ?? "4em"};
  height: ${(props) => props.size ?? "4em"};
`;

export default DivContainer;
