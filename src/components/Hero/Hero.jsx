import styles from "./hero.module.scss"
const Hero = ({ toggleMenu })=> {
    return(
        <div className={styles.hero}>
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
    )
}
export default Hero