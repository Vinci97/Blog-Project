import Hero from "@/components/Hero"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useState } from "react"
import styles from "../styles/PoliticaeSoceta.module.scss"
const PoliticaeSoceta = ()=> {
    const [menuAperto, setMenuAperto] = useState(false);

    const toggleMenu = () => {
     setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };
    return(
        <div className={styles.PoliticaeSoceta}>
            <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <Hero toggleMenu={toggleMenu}/>
            <h1 className={styles.titolo}>Politica e Soceta</h1>
            <Footer/>
        </div>
    )
}
export default PoliticaeSoceta