import React, { useEffect, useState } from 'react';
import styles from "./ArticoliSpada.module.scss";
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { prefetchImages } from "../../utils/prefetchImages";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const ArticoliSpada = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/MarcoSpada.json');
        const data = await response.json();
        const filteredArticles = data.filter(article => article.category === category).sort((a, b) => b.id - a.id);
        setArticles(filteredArticles);

        const imageUrls = filteredArticles.map(article => article.img);
        prefetchImages(imageUrls);
        
        setLoading(false);
      } catch (error) {
        console.error('Errore nel recupero degli articoli:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  const renderContent = (content) => {
    return content.split('/n/n').map((paragrafo, index) => {
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
    <div className={styles.articles}>
      {articles.map(article => (
        <Link key={article.id} href={`/articleSpada/${article.id}-${article.slug}`} passHref>
          <div className={styles.article}>
            <h3>{article.titolo}</h3>
            <img src={article.img} alt={article.titolo} />
            <div className={styles.paragrafo}>
              {renderContent(article.contenuto.split(" ").slice(0, 40).join(" ") + '...')}
            </div>
            <div className={styles.readMore}>Continua a leggere</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticoliSpada;



