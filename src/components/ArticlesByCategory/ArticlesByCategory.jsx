import React, { useEffect, useState } from 'react';
import styles from "./ArticlesByCategory.module.scss"
import Link from 'next/link';

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
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.articles}>
      {articles.map(article => (
        <Link key={article.id} href={`/article/${article.id}-${article.slug}`} passHref>
          <div className={styles.article}>
            <h3>{article.titolo}</h3>
            <img src={article.img} alt={article.titolo} />
            <p>{article.contenuto.split(" ").slice(0, 20).join(" ")}...</p>
            <a className={styles.readMore}>Continua a leggere</a>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticlesByCategory;
