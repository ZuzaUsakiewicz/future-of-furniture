import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, html {
  box-sizing:border-box;
  padding: 0;
  margin: 0;
}
 h1 {
   font-size: 4rem;
   color: pink;
   text-transform: uppercase;
 }
`;
const Container = styled.div`
  text-align: center;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <GlobalStyle />
      <h1>hello</h1>
      {/* <Navbar/> */}
      {children}
      {/* <Footer/> */}
    </Container>
  );
}
