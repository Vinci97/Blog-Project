import Link from "next/link";
import styles from "./header.module.scss";

const Header = ({ isOpen, toggleMenu }) => {
  const menuStyle = {
    position: 'absolute',
    left: isOpen ? '0' : '-100%',
    transition: 'left 0.5s ease-out',
  };
  return (
    <div className={styles.Header} style={menuStyle}>
      <div className={styles.headHam}>
        <Link href="/"><h3 className={styles.titleHam} onClick={toggleMenu}>MicheleVacca.it</h3></Link>
        <button className={styles.close} onClick={toggleMenu}>
        </button>
      </div>
      <Link href="/" className={styles.argomento} onClick={toggleMenu}>HOME</Link>
      <Link href="/Criticainternazionale" className={styles.argomento} onClick={toggleMenu}>STUDI INTERNAZIONALI</Link>
      <Link href="/Politicaesoceta" className={styles.argomento} onClick={toggleMenu}>POLITICA E SOCIETÀ</Link>
      <Link href="/Controinformazione" className={styles.argomento} onClick={toggleMenu}>CULTURA E TERRITORIO</Link>
      <Link href="/OpenDiritto" className={styles.argomento} onClick={toggleMenu}>FAKE NEWS</Link>
      <Link href="/ComeFare" className={styles.argomento} onClick={toggleMenu}>COME FARE...?</Link>
    </div>
  );
};

export default Header;
