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
            <a href="/">il Blog di</a>
            </h3>
            <h1 className={styles.logo}>
                <a href="/">Michele Vacca</a>
            </h1>
        </div>
    );
};

export default Header;