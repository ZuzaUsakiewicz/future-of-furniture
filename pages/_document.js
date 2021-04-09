import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;1,300&family=Prata&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://api.fontshare.com/css?f[]=satoshi@300&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@6.5.5/components/navigation/navigation.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@6.5.5/components/scrollbar/scrollbar.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@6.5.5/components/pagination/pagination.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@6.5.5/swiper.min.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

{
  /* <link
            href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
            rel="stylesheet"
          /> */
}
