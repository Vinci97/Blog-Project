import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>MicheleVacca.it</title>
        <meta name="description" content="Politica e attualità dal punto di vista di un libero studente" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ico/Michele.ico" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="MicheleVacca.it" />
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
      <main className={styles.main}>
        <Layout />
      </main>
    </>
  )
}
