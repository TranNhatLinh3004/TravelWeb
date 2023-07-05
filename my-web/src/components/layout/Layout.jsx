import React, { useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routers from "../routers/Routers";
import scrollreveal from "scrollreveal";

function Layout(props) {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        #hero,
      
        #services,
    
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
