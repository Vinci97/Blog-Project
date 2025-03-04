import React, { useEffect, useState } from "react";
import styles from "./layout.module.scss";
import Link from "next/link";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from "../Header";
import Hamburger from "../hamburger";
import Navbar from "../navbar";
import Footer from "../footer";
import { prefetchImages } from "../../utils/prefetchImages";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Rubrica from "../Rubrica";

const Layout = () => {
  const [menuAperto, setMenuAperto] = useState(false);
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/articoli.json');
        const data = await response.json();
        const sortedArticles = data.sort((a, b) => b.id - a.id);
        setArticles(sortedArticles);

        const imageUrls = data.map(article => article.img);
        prefetchImages(imageUrls);
        
        setLoading(false);
      } catch (error) {
        console.error('Errore nel recupero degli articoli:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const toggleMenu = () => {
    setMenuAperto(prevMenuAperto => !prevMenuAperto);
  };

  const loadMoreArticles = () => {
    setVisibleCount(prevCount => prevCount + 5);
  };

  const renderContent = (content) => {
    const cleanedContent = content.replace(/\*\*/g, ''); 
    return cleanedContent.split('/n/n').map((paragrafo, index) => {
      const isHeading = paragrafo.trim().startsWith('# ');
      const markdownClass = isHeading ? styles.sottotitolo : styles.paragrafo;
      return (
        <Markdown key={index} className={markdownClass} remarkPlugins={[remarkGfm]}>
          {paragrafo}
        </Markdown>
      );
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.layout}>
      <Header toggleMenu={toggleMenu} />
      <Hamburger />
      <Navbar toggleMenu={toggleMenu} isOpen={menuAperto} />
      <Rubrica/>
      <div className={styles.articles}>
        <div className={styles.ContTitolo}>
          <div className={styles.freccia}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
          <h1 className={styles.titolo}>POST RECENTI</h1>
        </div>
        {articles.slice(0, visibleCount).map(article => (
          <Link href={`/article/${article.id}-${article.slug}`} key={article.id}>
            <div className={styles.article}>
              <h3>{article.titolo}</h3>
              <img src={article.img} alt={article.titolo} />
              <div className={styles.paragrafo}>
                {renderContent(article.contenuto.split(" ").slice(0, 25).join(" ") + '...')}
              </div>
              <div className={styles.readMore}>Continua a leggere</div>
            </div>
          </Link>
        ))}
        {visibleCount < articles.length && (
          <button onClick={loadMoreArticles} className={styles.loadMoreBtn}>Altri Articoli</button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;



