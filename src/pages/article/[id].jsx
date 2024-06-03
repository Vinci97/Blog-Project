import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './article.module.scss';
import Header from '@/components/header';
import Hero from '@/components/Hero';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Markdown from 'react-markdown';
import { SocialIcon } from 'react-social-icons';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import remarkGfm from 'remark-gfm';

// Funzione per sanitizzare i nomi dei file
const sanitizeFilename = (filename) => {
  return filename.replace(/[^\w\s.-]/gi, '').replace(/\s+/g, '-');
};

const ArticlePage = ({ article }) => {
  const router = useRouter();
  const [menuAperto, setMenuAperto] = useState(false);
  const toggleMenu = () => {
    setMenuAperto(prevMenuAperto => !prevMenuAperto);
  };

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  const contenutoParagrafi = article.contenuto.split('/n/n').map((paragrafo, index) => {
    const isHeading = paragrafo.trim().startsWith('# ');
    const markdownClass = isHeading ? styles.sottotitolo : styles.paragrafo;
    return (
      <Markdown key={index} className={markdownClass} remarkPlugins={[remarkGfm]}>
        {paragrafo}
      </Markdown>
    );
  });

  return (
    <div className={styles.article}>
      <Head>
        <title>{article.titolo} - MicheleVacca.it</title>
        <meta name="description" content="Politica e attualità dal punto di vista di un libero studente" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ico/Michele.ico" />
      </Head>
      <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
      <Hero toggleMenu={toggleMenu}/>
      <Navbar/>
      <div className={styles.contenuto}>
        <h1 className={styles.titolo}>{article.titolo}</h1>
        <img src={article.img} alt={article.titolo} />
        <div className={styles.line}>
          <div className={styles.autore}><p>di <strong>{article.autore}</strong></p></div>
          <img className={styles.Michele} src="/pics/Michele.png" alt="Michele blog io politica informazione" loading="lazy" />
        </div>
        <div className={styles.orario}>
          <p className={styles.orarioEst}><strong>{article.date}</strong> alle <strong>{article.ora}</strong></p>
        </div>
        <div className={styles.social}>
          <SocialIcon className={styles.icon} network="tiktok" bgColor="rgba(9, 9, 9, 9)" style={{ height: 34, width: 34 }} url="https://www.tiktok.com/@michele.vacca.blog?_t=8mrJ15DgGkS&_r=1" target="_blank" rel="noopener noreferrer"/>
          <SocialIcon className={styles.icon} network="youtube" bgColor="rgba(9, 9, 9, 9)" style={{ height: 34, width: 34}} url="https://www.youtube.com/channel/UC_a5LsGJWmwSCDoV0SbD9AQ" target="_blank" rel="noopener noreferrer"/>
          <SocialIcon className={styles.icon} network="instagram" bgColor="rgba(9, 9, 9, 9)" style={{ height: 34, width: 34 }} url="https://www.instagram.com/blogdimichelevacca/?igsh=MXBiMHh4NnB2NGtubQ%3D%3D" target="_blank" rel="noopener noreferrer"/>
          <SocialIcon className={styles.icon} network="facebook" bgColor="rgba(9, 9, 9, 9)" style={{ height: 34, width: 34}} url="https://www.facebook.com/profile.php?id=100063728582740" target="_blank" rel="noopener noreferrer"/>
        </div>
        <br/>
        <div>{contenutoParagrafi}</div>
      </div>
      <Footer/>
    </div>
  );
};

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'public', 'articoli.json');
  const jsonData = fs.readFileSync(filePath);
  const articles = JSON.parse(jsonData);

  const paths = articles.map((article) => ({
    params: { id: `${article.id}-${sanitizeFilename(article.slug)}` },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'public', 'articoli.json');
  const jsonData = fs.readFileSync(filePath);
  const articles = JSON.parse(jsonData);

  const [id] = params.id.split('-');
  const article = articles.find((article) => article.id.toString() === id);

  return { props: { article } };
}

export default ArticlePage;

