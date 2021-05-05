
import "../styles/globals.scss";
import styles from "../styles/app.module.scss";

function App({ Component, pageProps }) {
  return (
    <div className={styles.mainContainer}>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}


export default App;
