// src/pages/article/[id].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './article.module.scss';
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
  const contenutoParagrafi = article.contenuto.split('\\n\\n').map((paragrafo, index) => (
    <ReactMarkdown key={index} className={styles.testo}>{paragrafo}</ReactMarkdown>
  ));


  return (
    <div className={styles.article}>
      <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
      <Hero toggleMenu={toggleMenu}/>
      <Navbar/>
      <div className={styles.contenuto}>
        <h1>{article.titolo}</h1>
        <img src={article.img} alt={article.titolo} />
        <div className={styles.line}></div>
         <div className={styles.autore}><p>di <strong>{article.autore}</strong></p></div>
        <div className={styles.line}></div>
        <div className={styles.orario}>
        <p className={styles.orarioEst}><strong>{article.date}</strong> alle <strong>{article.ora}</strong></p>
        </div>
        <br/><br/>
        <div>{contenutoParagrafi}</div>
      </div>
      <Footer/>
    </div>
  );
};

export default ArticlePage;
