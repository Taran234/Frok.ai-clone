import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="whole-container">
      <NextSeo
        title="Home: nine4"
        description="Welcome to nine4 homepage."

      />
      <Head>
        <title>title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* transparent text here */}
      <div>
        <div className="transparent-container" style={{
          top: "0px",
          position: "absolute",
          left: "0px",
          transform: "scaleX(1)"
        }}>
          <div className="transparent-text">FROK</div>
        </div>
      </div>
      <Header />
      <Main />
      {/* transparent text here */}

      <Footer />
      <div>
        <div
          className="transparent-container"
          style={{
            bottom: "0px",
            position: "absolute",
            right: "0px",
            transform: "scaleX(-1)"
          }}
        >
          <div className="transparent-text">FROK</div>
        </div>
      </div>
    </div>
  );
}
