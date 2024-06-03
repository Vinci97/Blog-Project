import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>{article.titolo} - MicheleVacca.it</title>
        <meta name="description" content="Politica e attualità dal punto di vista di un libero studente" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ico/Michele.ico" />
        <meta name="google-site-verification" content="ePCHNw-cLEJubwrCWJboS0uLoc3LlfzXCXAi0nzLEzQ" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className={styles.main}>
       <Layout/>
      </main>
    </>
  )
}
