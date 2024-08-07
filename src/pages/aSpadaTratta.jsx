import { useState } from "react"
import styles from "../styles/aSpadaTratta.module.scss"
import Head from "next/head"
import Header from "@/components/Header";
import Hamburger from "@/components/hamburger";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ArticoliSpada from "@/components/ArticoliSpada";

const aSpadaTratta = () => {
    const [menuAperto, setMenuAperto] = useState(false);

    const toggleMenu = () => {
        setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };

    return (
        <div className={styles.aSpadaTratta}>
            <Head>
                <title>A SPADA TRATTA - Michele Vacca</title>
                <meta name="description" content="Politica e attualità dal punto di vista di un libero studente" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/ico/Michele.ico" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Come Fare - Michele Vacca" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.il-blog-di-michele-vacca.it" />
                <meta property="og:image" content="/ico/Michele.ico" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Come Fare - Michele Vacca" />
                <meta name="twitter:image" content="/ico/Michele.ico" />
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "url": "https://www.il-blog-di-michele-vacca.it",
                      "logo": "/ico/Michele.ico",
                      "name": "Michele Vacca",
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
                    <h1 className={styles.titolo}>A SPADA TRATTA</h1>
                </div>
                <ArticoliSpada category="aSpadaTratta" />
            </div>
            <Footer />
        </div>
    )
}

export default aSpadaTratta