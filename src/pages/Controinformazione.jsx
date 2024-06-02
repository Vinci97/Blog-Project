import Hero from "@/components/Hero"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useState } from "react"
import styles from "../styles/Controinformazione.module.scss"
import Navbar from "@/components/navbar"
import ArticlesByCategory from "@/components/ArticlesByCategory";
import Head from "next/head"
const Controinformazione = ()=> {
    const [menuAperto, setMenuAperto] = useState(false);

    const toggleMenu = () => {
     setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };
    return(
        <div className={styles.Controinformazione}>
            <Head>
                <title>MicheleVacca.it</title>
                <meta name="description" content="Politica e attualità dal punto di vista di un libero studente" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/ico/Michele.ico" />
            </Head>
            <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <Hero toggleMenu={toggleMenu}/>
            <Navbar/>
            <div className={styles.container}>
            <div className={styles.ContTitolo}>
               <div className={styles.line1}><div className={styles.line2}></div></div> 
               <h1 className={styles.titolo}>Controinformazione</h1>
            </div>
            <ArticlesByCategory category="controinformazione" />
            </div>
            <Footer/>
        </div>
    )
}
export default Controinformazione