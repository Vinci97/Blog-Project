import styles from "./header.module.scss";

const Header = ({ toggleMenu }) => {
    return (
        <div className={styles.header}>
            <button className={styles.hamburger} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <h3 className={styles.blog}>
                il Blog di
            </h3>
            <h1 className={styles.logo}>
                Michele Vacca
            </h1>
        </div>
    );
};

export default Header;