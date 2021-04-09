import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, html {
  box-sizing:border-box;
  padding: 0;
  margin: 0;
}
body{
  font-family: Kanit;
  font-weight: 300;
}
h1 {
   font-size: 4rem;
   color: pink;
   font-family: Satoshi;
    }
.swiper-container {
      width: 100%;
      height: 80vh;
    }
.swiper-slide {
      cursor: grab;
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      &:active {
        cursor: grabbing;
      }
    }
.swiper-button-prev,.swiper-button-next{
    display: none;
    pointer-events: none;
    }
.swiper-pagination-bullet{
  background-color: black;
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
