import "../styles/globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer myName="user" />
    </>
  );
}

export default MyApp;
