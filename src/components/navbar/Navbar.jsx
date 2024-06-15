import Link from "next/link";
import styles from "./navbar.module.scss";

const Navbar = ({ isOpen, toggleMenu }) => {
  const menuStyle = {
    position: 'fixed',
    left: isOpen ? '0' : '-120%',
    transition: 'left 0.5s ease-out',
  };
  return (
    <div className={styles.navbar} style={menuStyle}>
      <div className={styles.NavHam}>
        <Link href="/"><h3 className={styles.titleHam} onClick={toggleMenu}>MicheleVacca.it</h3></Link>
        <button className={styles.close} onClick={toggleMenu}>
        </button>
      </div>
      <Link href="/" className={styles.argomento}>HOME</Link>
      <Link href="/Criticainternazionale" className={styles.argomento}><span className={styles.argSpan}>CRITICA<span>INTERNAZIONALE</span></span></Link>
      <Link href="/Politicaesocieta" className={styles.argomento}><span className={styles.argSpan}>POLITICA, <span>GIOVANI E SOCIETÀ</span> </span></Link>
      <Link href="/Controinformazione" className={styles.argomento}>CONTROINFORMAZIONE</Link>
      <Link href="/OpenDiritto" className={styles.argomento}>OPEN DIRITTO</Link>
      <Link href="/ComeFare" className={styles.argomento}>COME FARE...?</Link>
    </div>
    
  );
};

export default Navbar;
