import Hero from "@/components/Hero"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useState } from "react"
import styles from "../styles/ComeFare.module.scss"
import Navbar from "@/components/navbar"
import ArticlesByCategory from "@/components/ArticlesByCategory";
import Head from "next/head"
const ComeFare = ()=> {
    const [menuAperto, setMenuAperto] = useState(false);

    const toggleMenu = () => {
     setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };
    return(
        <div className={styles.ComeFare}>
            <Head>
                <title>{article.titolo} - MicheleVacca.it</title>
                <meta name="description" content="Politica e attualità dal punto di vista di un libero studente" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/ico/Michele.ico" />
                <meta name="google-site-verification" content="ePCHNw-cLEJubwrCWJboS0uLoc3LlfzXCXAi0nzLEzQ" />
                <meta name="robots" content="index, follow" />
            </Head>
            <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <Hero toggleMenu={toggleMenu}/>
            <Navbar/>
            <div className={styles.container}>
            <div className={styles.ContTitolo}>
               <div className={styles.line1}><div className={styles.line2}></div></div> 
               <h1 className={styles.titolo}>Come Fare...?</h1>
            </div>
            <ArticlesByCategory category="comefare" />
            </div>
            <Footer/>
        </div>
    )
}
export default ComeFare