import { isMobile } from "react-device-detect";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import "../styles/globals.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isMob, setIsMob] = useState(false);

  useEffect(() => {
    setIsMob(isMobile);
  }, []); 
  
  return (
    <>
    {!isMob ? (
      <>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </>
    ) : (
      <Component {...pageProps} />
    )}

    </>
  );
}

export default MyApp;
