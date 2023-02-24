import "../styles/globals.css";
import Layout from "../components/Layouts/main";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
