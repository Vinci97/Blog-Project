import { useEffect, useState } from "react";
import Hero from "../Hero";
import Footer from "../footer";
import Header from "../header";
import styles from "./leyout.module.scss";
import Navbar from "../navbar";
import Link from "next/link";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Layout = () => {
  const [menuAperto, setMenuAperto] = useState(false);
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/articoli.json');
        const data = await response.json();
        const sortedArticles = data.sort((a, b) => b.id - a.id);
        setArticles(sortedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
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

  return (
    <div className={styles.layout}>
      <Header isOpen={menuAperto} toggleMenu={toggleMenu} />
      <Hero toggleMenu={toggleMenu} />
      <Navbar />
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
              <Markdown className={styles.paragrafo} remarkPlugins={[remarkGfm]}>
                {article.contenuto.split(" ").slice(0, 10).join(" ") + '...'}
              </Markdown>
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
