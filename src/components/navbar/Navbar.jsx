import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link href="/" className={styles.argomento}>HOME</Link>
      <Link href="/Criticainternazionale" className={styles.argomento}>CRITICA INTERNAZIONALE</Link>
      <Link href="/Politicaesocieta" className={styles.argomento}>POLITICA, GIOVANI E SOCIETÀ</Link>
      <Link href="/Controinformazione" className={styles.argomento}>CONTROINFORMAZIONE</Link>
      <Link href="/OpenDiritto" className={styles.argomento}>OPEN DIRITTO</Link>
      <Link href="/ComeFare" className={styles.argomento}>COME FARE...?</Link>
    </div>
  );
};

export default Navbar;