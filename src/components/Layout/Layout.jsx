import { useEffect, useState } from "react"
import Hero from "../Hero"
import Footer from "../footer"
import Header from "../header"
import styles from "./leyout.module.scss"
import Navbar from "../navbar"
import Link from "next/link"
const Layout =()=>{
    const [menuAperto, setMenuAperto] = useState(false);
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      const fetchArticles = async () => {
        try {
          const response = await fetch('/articoli.json');
          const data = await response.json();
          const sortedArticles = data.sort((a, b) => b.id - a.id).slice(0, 5);
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
    return(
        <div className={styles.layout}>
            <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <Hero toggleMenu={toggleMenu}/>
            <Navbar/>
            <div className={styles.articles}>
                    <h2>Ultimi Articoli</h2>
                    {articles.map(article => (
                    <Link href={`/article/${article.id}`}>
                      <div key={article.id} className={styles.article}>
                         <h3>{article.titolo}</h3>
                         <img src={article.img} alt={article.titolo} />
                         <p>{article.contenuto.split(" ").slice(0, 10).join(" ")}...</p>
                      </div>
                    </Link>
                    ))}

            </div>
            <Footer/>
        </div>
    )
}
export default Layout