import Hero from "@/components/Hero"
import styles from "../styles/Criticainternazionale.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header"
import {  useState } from "react"
import Navbar from "@/components/navbar"
import ArticlesByCategory from "@/components/ArticlesByCategory"
const Criticainternazionale = ()=> {
    const [menuAperto, setMenuAperto] = useState(false);

    const toggleMenu = () => {
     setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };
    return(
        <div className={styles.Criticainternazionale}>
            <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <Hero toggleMenu={toggleMenu}/>
            <Navbar/>
            <div className={styles.container}>
            <div className={styles.ContTitolo}>
               <div className={styles.line1}>
                <div className={styles.line2}></div></div> <h1 className={styles.titolo}>Critica Internazionale</h1>
            </div>
            <ArticlesByCategory category="criticainternazionale" />
            </div>
            <Footer/>
        </div>
    )
}
export default Criticainternazionale