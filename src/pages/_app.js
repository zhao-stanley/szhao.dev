import "../../styles/globals.css";
import { ThemeProvider } from "next-themes";
import NProgress from "nprogress";
import Router from "next/router";
import siteMetadata from "../data/siteMetadata";
import Navbar from "../components/global/Navbar";
import Head from "next/head";
import Footer from "../components/global/Footer";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.defaultTheme}>
      <Head>
        <title>{siteMetadata.title}</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
