import Link from "next/link";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link href="/" className={styles.argomento}>HOME</Link>
      <Link href="/StudiInternazionali" className={styles.argomento}>STUDI INTERNAZIONALI</Link>
      <Link href="/Politicaesoceta" className={styles.argomento}>POLITICA E SOCIETÀ</Link>
      <Link href="/CulturaETerritorio" className={styles.argomento}>CULTURA E TERRITORIO</Link>
      <Link href="/Fake-news" className={styles.argomento}>FAKE NEWS</Link>
      <Link href="/ComeFare" className={styles.argomento}>COME FARE...?</Link>
    </div>
  );
};

export default Navbar;