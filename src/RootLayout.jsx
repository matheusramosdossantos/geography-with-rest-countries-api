// File with the root layout.

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Styles
import styles from "./styles/globals.module.scss";

// React router import
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Header
        className={styles.header}
        text1="Geography"
        text2="About"
        imgSrc="\images\gifs\earth.gif"
        imgAlt="Earth Gif"
      />
      <Outlet />
      <Footer
        className={styles.footer}
        aboutText="Project done with JavaScript, React and Sass. Also was used Rest Countries API."
        srcIcon1="https://github.com/matheusramosdossantos"
        srcIcon2="https://www.linkedin.com/in/matheus-ramos-front-enddeveloper/"
        srcImageIcon1="\images\icons8-github-128.png"
        srcImageIcon2="\images\icons8-linkedin-100.png"
        madeBy="Made by Matheus Ramos dos Santos"
      />
    </>
  );
}
