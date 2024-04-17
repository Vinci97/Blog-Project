import Hero from "@/components/Hero"
import styles from "../styles/Criticainternazionale.module.scss"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useEffect, useState } from "react"
import fetchData from '../utils/fetchData';
import Navbar from "@/components/navbar"
import Notizie from "@/components/notizie"
const Criticainternazionale = ()=> {
    const [menuAperto, setMenuAperto] = useState(false);
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
          const allArticles = await fetchData();
          const filteredArticles = allArticles.filter(article => article.category === 'criticainternazionale');
          setArticles(filteredArticles);
        };
    
        getArticles();
      }, []);

    const toggleMenu = () => {
     setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };
    return(
        <div className={styles.Criticainternazionale}>
            <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <Hero toggleMenu={toggleMenu}/>
            <Navbar/>
            <h1 className={styles.titolo}>Critica Internazionale</h1>
            <Notizie articles={articles} />
            <Footer/>
        </div>
    )
}
export default Criticainternazionale