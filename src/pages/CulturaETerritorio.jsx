import Hero from "@/components/Hero"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useState } from "react"
import styles from "../styles/CulturaETerritorio.module.scss"
import Navbar from "@/components/navbar"
const CulturaETerritorio = ()=> {
    const [menuAperto, setMenuAperto] = useState(false);

    const toggleMenu = () => {
     setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };
    return(
        <div className={styles.CulturaETerritorio}>
            <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <Hero toggleMenu={toggleMenu}/>
            <Navbar/>
            <h1 className={styles.titolo}>CULTURA E TERRITORIO</h1>
            <Footer/>
        </div>
    )
}
export default CulturaETerritorio