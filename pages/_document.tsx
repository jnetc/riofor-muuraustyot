import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

import { setInitialTheme } from '@Helpers/critical';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        </Head>
        <body id="home">
          <Main />
          <div id="portal-details" />
          <div id="portal-contacts" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
