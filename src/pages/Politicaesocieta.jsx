import { useState } from "react"
import styles from "../styles/Politicaesocieta.module.scss"
import ArticlesByCategory from "@/components/ArticlesByCategory"
import Head from "next/head"
import Header from "@/components/Header"
import Hamburger from "@/components/Hamburger"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"

const Politicaesocieta = () => {
    const [menuAperto, setMenuAperto] = useState(false);

    const toggleMenu = () => {
        setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };

    return (
        <div className={styles.Politicaesocieta}>
            <Head>
                <title>Politica, Giovani e Società - MicheleVacca.it</title>
                <meta name="description" content="Politica e attualità dal punto di vista di un libero studente" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/ico/Michele.ico" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Politica, Giovani e Società - MicheleVacca.it" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.il-blog-di-michele-vacca.it" />
                <meta property="og:image" content="/ico/Michele.ico" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="MicheleVacca.it" />
                <meta name="twitter:image" content="/ico/Michele.ico" />
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "url": "https://www.il-blog-di-michele-vacca.it",
                      "logo": "/ico/Michele.ico",
                      "name": "MicheleVacca.it",
                      "sameAs": [
                        "https://www.tiktok.com/@michele.vacca.blog?_t=8mrJ15DgGkS&_r=1",
                        "https://www.instagram.com/blogdimichelevacca/?igsh=MXBiMHh4NnB2NGtubQ%3D%3D",
                        "https://www.facebook.com/profile.php?id=100063728582740"
                      ]
                    }
                  `}
                </script>
            </Head>
            <Header toggleMenu={toggleMenu}/>
            <Hamburger />
            <Navbar isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <div className={styles.container}>
                <div className={styles.ContTitolo}>
                    <div className={styles.line1}><div className={styles.line2}></div></div>
                    <h1 className={styles.titolo}>Politica, Giovani e Società</h1>
                </div>
                <ArticlesByCategory category="politica" />
            </div>
            <Footer/>
        </div>
    )
}

export default Politicaesocieta
