import "@/styles/globals.css";
import { Header } from "./PagesLinks";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
