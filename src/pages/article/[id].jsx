import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './article.module.scss';
import Markdown from 'react-markdown';
import { SocialIcon } from 'react-social-icons';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import remarkGfm from 'remark-gfm';
import Header from '@/components/Header';
import Hamburger from '@/components/hamburger';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { prefetchImages } from '@/utils/prefetchImages';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

const sanitizeFilename = (filename) => {
  return filename.replace(/[^\w\s.-]/gi, '').replace(/\s+/g, '-');
};

const ArticlePage = ({ article }) => {
  const router = useRouter();
  const [menuAperto, setMenuAperto] = useState(false);
  const toggleMenu = () => {
    setMenuAperto(prevMenuAperto => !prevMenuAperto);
  };

  useEffect(() => {
    if (article) {
      prefetchImages([article.img, article.imgAut]);
    }
  }, [article]);

  if (router.isFallback) {
    return <LoadingSpinner />;
  }

  if (!article) {
    return <p>Article not found.</p>;
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
        <meta name="description" content={article.contenuto.substring(0, 150)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ico/Michele.ico" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={article.titolo} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.il-blog-di-michele-vacca.it/article/${article.id}-${sanitizeFilename(article.slug)}`} />
        <meta property="og:image" content={article.img} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.titolo} />
        <meta name="twitter:image" content={article.img} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${article.titolo}",
              "image": "${article.img}",
              "author": {
                "@type": "Person",
                "name": "${article.autore}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "MicheleVacca.it",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/ico/Michele.ico"
                },
                "sameAs": [
                  "https://www.tiktok.com/@michele.vacca.blog?_t=8mrJ15DgGkS&_r=1",
                  "https://www.instagram.com/blogdimichelevacca/?igsh=MXBiMHh4NnB2NGtubQ%3D%3D",
                  "https://www.facebook.com/profile.php?id=100063728582740"
                ]
              },
              "datePublished": "${article.date}",
              "description": "${article.contenuto.substring(0, 150)}"
            }
          `}
        </script>
      </Head>
      <Header toggleMenu={toggleMenu}/>
      <Hamburger />
      <Navbar isOpen={menuAperto} toggleMenu={toggleMenu}/>
      <div className={styles.contenuto}>
        <h1 className={styles.titolo}>{article.titolo}</h1>
        <img src={article.img} alt={article.titolo} title={article.titolo} />
        <div className={styles.line}>
          <div className={styles.autore}><p>di <strong>{article.autore}</strong></p></div>
          <img name={styles.Michele} src={article.imgAut} alt={article.titolo} title={article.titolo} />
        </div>
        <div className={styles.orario}>
          <p className={styles.orarioEst}><strong>{article.date}</strong> alle <strong>{article.ora}</strong></p>
        </div>
        <div className={styles.social}>
          <SocialIcon className={styles.icon} network="tiktok" bgColor="#000000" style={{ height: 34, width: 34 }} url="https://www.tiktok.com/@michele.vacca.blog?_t=8mrJ15DgGkS&_r=1" target="_blank" rel="noopener noreferrer" />
          <SocialIcon className={styles.icon} network="youtube" bgColor="#000000" style={{ height: 34, width: 34 }} url="https://www.youtube.com/channel/UC_a5LsGJWmwSCDoV0SbD9AQ" target="_blank" rel="noopener noreferrer" />
          <SocialIcon className={styles.icon} network="instagram" bgColor="#000000" style={{ height: 34, width: 34 }} url="https://www.instagram.com/blogdimichelevacca/?igsh=MXBiMHh4NnB2NGtubQ%3D%3D" target="_blank" rel="noopener noreferrer" />
          <SocialIcon className={styles.icon} network="facebook" bgColor="#000000" style={{ height: 34, width: 34 }} url="https://www.facebook.com/profile.php?id=100063728582740" target="_blank" rel="noopener noreferrer" />
        </div>
        <br />
        <div>{contenutoParagrafi}</div>
      </div>
      <Footer />
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

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: { article },
  };
}

export default ArticlePage;
