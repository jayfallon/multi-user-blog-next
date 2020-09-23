import Document, { Html, Head, Main, NextScript } from "next/document";
import getConfig from "next/config";
class MyDocument extends Document {
  // setGoogleTags() {
  //   if (publicRuntimeConfig.PRODUCTION) {
  //     return {
  //       __html: `
  //       window.dataLayer = window.dataLayer || [];
  //       function gtag(){dataLayer.push(arguments);}
  //       gtag('js', new Date());

  //       gtag('config', 'UA-173132725-1');

  //       `,
  //     };
  //   }
  // }

  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-173132725-1');

        `,
    };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-173132725-1"></script>
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          <meta charSet="utf-8" />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

          <meta name="description" content="" />
          <meta name="author" content="" />

          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          />

          <link rel="stylesheet" href="/static/css/styles.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
