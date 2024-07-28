import { isMobile } from "react-device-detect";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import NavMobile from "@/components/mobile/nav";
import Footer_Mob from "@/components/mobile/Footer_Mob";

function MyApp({ Component, pageProps }) {
  const [isMob, setIsMob] = useState(false);
  const [dept, setDept] = useState(null);

  useEffect(() => {
    console.log(isMobile);
    setIsMob(isMobile);

    const url = "/api/dept";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDept(data);
      });
  }, []);

  return (
    <>
      {!isMob ? (
        <>
          <Nav />
          <Component {...pageProps} dept={dept} />
          <Footer />
        </>
      ) : (
        <>
          <NavMobile />
          <Component {...pageProps} dept={dept} />
          <Footer_Mob />
        </>
      )}

    </>
  );
}

export default MyApp;
