const size = {
  xs: "320px",
  sm: "500px",
  md: "768px",
  lg: "1200px",
};
const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
};
export default { size, device };

// How to use it:
// import breakpoint from 'Commons/breakpoints';
// const Component = styled.div`
//     @media only screen and ${breakpoint.device.xs}{
//         display: none;
//     }
//     @media only screen and ${breakpoint.device.sm}{
//         display: flex;
//     }
//     @media only screen and ${breakpoint.device.lg}{
//         display: flex;
//     }
// `;
