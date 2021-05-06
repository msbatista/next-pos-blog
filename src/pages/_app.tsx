
import "../styles/globals.scss";
import styles from "../styles/app.module.scss";
import React from "react";
import { Header } from "../components/Header";

function App({ Component, pageProps }) {
  return (
    <div className={styles.mainContainer}>
      <main>
        <Header/>
        <Component {...pageProps} />
      </main>
    </div>
  );
}


export default App;
