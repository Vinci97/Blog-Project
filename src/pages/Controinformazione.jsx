import Hero from "@/components/Hero"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useState } from "react"
import styles from "../styles/Controinformazione.module.scss"
import Navbar from "@/components/navbar"
import ArticlesByCategory from "@/components/ArticlesByCategory";
import Head from "next/head"

const Controinformazione = () => {
    const [menuAperto, setMenuAperto] = useState(false);

    const toggleMenu = () => {
        setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };

    return (
        <div className={styles.Controinformazione}>
            <Head>
                <title>Controinformazione - MicheleVacca.it</title>
                <meta name="description" content="Politica e attualità dal punto di vista di un libero studente" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/ico/Michele.ico" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Controinformazione - MicheleVacca.it" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.il-blog-di-michele-vacca.it" />
                <meta property="og:image" content="/ico/Michele.ico" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Controinformazione - MicheleVacca.it" />
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