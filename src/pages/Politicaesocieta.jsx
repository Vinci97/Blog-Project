import Hero from "@/components/Hero"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useState } from "react"
import styles from "../styles/Politicaesocieta.module.scss"
import Navbar from "@/components/navbar"
import ArticlesByCategory from "@/components/ArticlesByCategory"

const Politicaesocieta = ()=> {
    const [menuAperto, setMenuAperto] = useState(false);

    const toggleMenu = () => {
     setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };
    return(
        <div className={styles.Politicaesocieta}>
            <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <Hero toggleMenu={toggleMenu}/>
            <Navbar/>
            <div className={styles.container}>
            <div className={styles.ContTitolo}>
               <div className={styles.line1}><div className={styles.line2}></div></div> 
               <h1 className={styles.titolo}>Politica e Società</h1>
            </div>
            
            <ArticlesByCategory category="politica" />
            </div>
            <Footer/>
        </div>
    )
}
export default Politicaesocieta
