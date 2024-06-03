import Hero from "@/components/Hero"
import styles from "../styles/Criticainternazionale.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header"
import {  useState } from "react"
import Navbar from "@/components/navbar"
import ArticlesByCategory from "@/components/ArticlesByCategory"
import Head from "next/head"
const Criticainternazionale = ()=> {
    const [menuAperto, setMenuAperto] = useState(false);

    const toggleMenu = () => {
     setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };
    return(
        <div className={styles.Criticainternazionale}>
            <Head>
                <title>MicheleVacca.it</title>
                <meta name="description" content="Politica e attualità dal punto di vista di un libero studente" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/ico/Michele.ico" />
                <meta name="google-site-verification" content="ePCHNw-cLEJubwrCWJboS0uLoc3LlfzXCXAi0nzLEzQ" />
            </Head>
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