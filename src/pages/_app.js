import "../../styles/globals.css";
import NProgress from "nprogress";
import Router from "next/router";
import siteMetadata from "../data/siteMetadata";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import SideNav from "../components/global/SideNav";
import Layout from "../components/global/Layout";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

function App({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>

      {/* <Footer /> */}
    </>
  );
}

export default App;
