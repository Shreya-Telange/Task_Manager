import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div id="modal-root"></div> {/* Add modal-root here */}
        <NextScript />
      </body>
    </Html>
  );
}
