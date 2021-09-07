import styled from "styled-components";

const DivContainer = styled.div`
  font-size: ${(props) => props.baseSize ?? "inherit"};
  box-sizing: border-box;
  width: 4em;
  height: 4em;
`;

export default DivContainer;
