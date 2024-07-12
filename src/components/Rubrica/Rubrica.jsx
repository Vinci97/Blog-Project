import { useEffect, useState } from "react";
import styles from "./Rubrica.module.scss";
import Link from "next/link";
import { prefetchImages } from "../../utils/prefetchImages";
const Rubrica = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchArticles = async () => {
          try {
            const response = await fetch('/MarcoSpada.json');
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
    return(
        <div className={styles.Rubrica}>
            <div className={styles.container}>
                <div className={styles.Spada}>
                    <Link href="/aSpadaTratta" className={styles.argomento}>
                        <div className={styles.description}>
                            <img className={styles.Marco} src="../../../../pics/MarcoSpada.webp" alt="Marco Spada" />
                            <div>
                                <h3>"A SPADA TRATTA"</h3>
                                <h2>A CURA DI MARCO SPADA</h2>
                                <p className={styles.txt}>Commenti sulla politica europea...</p>
                            </div>
                            <p className={styles.click}>Cliccami! <span className={styles.icon}></span></p>
                        </div>
                    </Link>
                </div>
                {articles.slice(0, 1).map(article => (
                    <Link href={`/articleSpada/${article.id}-${article.slug}`} key={article.id}>
                        <div className={styles.article}>
                            <p className={styles.new}>new!</p>
                            <h3 className={styles.artTitolo}>{article.titolo}</h3>
                            <img className={styles.artImg} src={article.img} alt={article.titolo} loading="lazy" />
                            <p className={styles.click}>Cliccami! <span className={styles.icon}></span></p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Rubrica