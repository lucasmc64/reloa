import styled from "styled-components";

const DivContainer = styled.div`
  font-size: ${(props) => props.baseSize ?? "inherit"};
  width: 4em;
  height: 4em;
  padding: 0.5em;
`;
export default DivContainer;
