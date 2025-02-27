import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from "./ArticlesByCategory.module.scss";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'; // <--- Importa il plugin
import { prefetchImages } from "../../utils/prefetchImages";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const ArticlesByCategory = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/articoli.json');
        const data = await response.json();
        const filteredArticles = data
          .filter((article) => article.category === category)
          .sort((a, b) => b.id - a.id);

        setArticles(filteredArticles);

        const imageUrls = filteredArticles.map((article) => article.img);
        prefetchImages(imageUrls);

        setLoading(false);
      } catch (error) {
        console.error('Errore nel recupero degli articoli:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  // Trasforma i link testuali in un bottone HTML
  const convertUrlsToButtons = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/gi;
    return text.replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer"><button> Clicca qui </button></a>`;
    });
  };

  // Rendi il contenuto, trasformando i link e usando rehypeRaw per interpretare l'HTML
  const renderContent = (content) => {
    // Esempio di rimozione di eventuali ** superflui
    const cleanedContent = content.replace(/\*\*/g, '');
    const paragraphs = cleanedContent.split('/n/n');

    return paragraphs.map((paragraph, index) => {
      const isHeading = paragraph.trim().startsWith('# ');
      const markdownClass = isHeading ? styles.sottotitolo : styles.paragrafo;

      // Sostituisce i link testuali con un bottone HTML
      const replacedParagraph = convertUrlsToButtons(paragraph);

      return (
        <Markdown
          key={index}
          className={markdownClass}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}  // <--- usa rehypeRaw
        >
          {replacedParagraph}
        </Markdown>
      );
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.articles}>
      {articles.map((article) => (
        <Link key={article.id} href={`/article/${article.id}-${article.slug}`} passHref>
          <div className={styles.article}>
            <h3>{article.titolo}</h3>
            <img src={article.img} alt={article.titolo} />
            <div className={styles.paragrafo}>
              {renderContent(
                article.contenuto.split(' ').slice(0, 25).join(' ') + '...'
              )}
            </div>
            <div className={styles.readMore}>Continua a leggere</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticlesByCategory;
