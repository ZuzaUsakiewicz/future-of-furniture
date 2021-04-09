// https://www.joshwcomeau.com/react/modern-spacer-gif/

import styled from "styled-components";
function getHeight({ axis, size }) {
  return axis === "horizontal" ? 1 : size;
}
function getWidth({ axis, size }) {
  return axis === "vertical" ? 1 : size;
}
const Spacer = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;
export default Spacer;

// example:
// Produces a 16px × 16px gap:
{
  /* <Spacer size={16} /> */
}
// Produces a 32px × 1px gap:
{
  /* <Spacer axis="horizontal" size={32} /> */
}
