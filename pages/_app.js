import Layout from "../components/Layout";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import Theme from "../components/Theme";
import * as styled from "styled-components";

const GlobalStyle = styled.createGlobalStyle`
  *,
  html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: Kanit;
    font-weight: 400;
    font-size: 20px;
    min-height: 200vh;
    background: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.primaryLight};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    z-index: 10;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryLight};
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-family: Satoshi;
    z-index: 2;
    position: relative;
  }
  button {
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    font-family: Satoshi;
    &:focus-visible {
      outline: 2px solid black;
    }
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
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    pointer-events: none;
  }
  .swiper-pagination-bullet {
    background-color: black;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}

export default MyApp;
