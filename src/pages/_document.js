import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='use-credentials'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&amp;display=swap'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&amp;display=swap'
          />
        </Head>{' '}
        <body>
          <Main />
          <NextScript />
        </body>{' '}
      </Html>
    )
  }
}

export default MyDocument
