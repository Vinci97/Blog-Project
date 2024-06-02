import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './article.module.scss';
import Header from '@/components/header';
import Hero from '@/components/Hero';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Markdown from 'react-markdown';
import { SocialIcon } from 'react-social-icons';

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

  const contenutoParagrafi = article.contenuto.split('/n/n').map((paragrafo, index) => {
    const isHeading = paragrafo.trim().startsWith('# ');
    const markdownClass = isHeading ? styles.sottotitolo : styles.paragrafo;
    return (
      <Markdown key={index} className={markdownClass}>
        {paragrafo}
      </Markdown>
    );
  });

  return (
    <div className={styles.article}>
      <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
      <Hero toggleMenu={toggleMenu}/>
      <Navbar/>
      <div className={styles.contenuto}>
        <h1 className={styles.titolo}>{article.titolo}</h1>
        <img src={article.img} alt={article.titolo} />
        <div className={styles.line}>
          <div className={styles.autore}><p>di <strong>{article.autore}</strong></p></div>
          <img className={styles.Michele} src="/pics/Michele.png" alt="Michele blog io politica informazione" />
        </div>
        <div className={styles.orario}>
          <p className={styles.orarioEst}><strong>{article.date}</strong> alle <strong>{article.ora}</strong></p>
        </div>
        <div className={styles.social}>
          <SocialIcon className={styles.icon} network="tiktok" bgColor="rgba(9, 9, 9, 9)"style={{ height: 34, width: 34 }} url="https://www.tiktok.com/@michele.vacca.blog?_t=8mrJ15DgGkS&_r=1"target="_blank"rel="noopener noreferrer"/>
          <SocialIcon className={styles.icon} network="youtube" bgColor="rgba(9, 9, 9, 9)"style={{ height: 34, width: 34}} url="https://www.youtube.com/channel/UC_a5LsGJWmwSCDoV0SbD9AQ"target="_blank"rel="noopener noreferrer"/>
          <SocialIcon className={styles.icon} network="instagram" bgColor="rgba(9, 9, 9, 9)"style={{ height: 34, width: 34 }}url="https://www.instagram.com/vacca_michele/"target="_blank"rel="noopener noreferrer"/>
          <SocialIcon className={styles.icon} network="facebook" bgColor="rgba(9, 9, 9, 9)"style={{ height: 34, width: 34}} url="https://www.facebook.com/michele.vacca.99"target="_blank"rel="noopener noreferrer"/>
        </div>
        <br/>
        <div>{contenutoParagrafi}</div>
      </div>
      <Footer/>
    </div>
  );
};

export default ArticlePage;

