// src/pages/article/[id].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../../styles/article.module.scss';
import Header from '@/components/header';
import Hero from '@/components/Hero';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);
  const [menuAperto, setMenuAperto] = useState(false);
  const toggleMenu = () => {
    setMenuAperto(prevMenuAperto => !prevMenuAperto);
   };

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch('/articoli.json');
        const data = await response.json();
        const articleData = data.find(article => article.id === parseInt(id));
        setArticle(articleData);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.article}>
      <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
      <Hero toggleMenu={toggleMenu}/>
      <Navbar/>
      <div className={styles.contenuto}>
        <h1>{article.titolo}</h1>
        <img src={article.img} alt={article.titolo} />
        <p>{article.contenuto}</p>
      </div>
      <Footer/>
    </div>
  );
};

export default ArticlePage;
