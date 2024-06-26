import React, { useEffect, useState } from 'react';
import styles from "./ArticlesByCategory.module.scss";
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ArticlesByCategory = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/articoli.json');
        const data = await response.json();
        const filteredArticles = data.filter(article => article.category === category).sort((a, b) => b.id - a.id);
        setArticles(filteredArticles);
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
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.articles}>
      {articles.map(article => (
        <Link key={article.id} href={`/article/${article.id}-${article.slug}`} passHref>
          <div className={styles.article}>
            <h3>{article.titolo}</h3>
            <img src={article.img} alt={article.titolo} loading="lazy"/>
            <div className={styles.paragrafo}>
              {renderContent(article.contenuto.split(" ").slice(0, 20).join(" ") + '...')}
            </div>
            <div className={styles.readMore}>Continua a leggere</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticlesByCategory;

