import Hero from "@/components/Hero"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useState } from "react"
import styles from "../styles/FakeNews.module.scss"
const FakeNews = ()=> {
    const [menuAperto, setMenuAperto] = useState(false);

    const toggleMenu = () => {
     setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };
    return(
        <div className={styles.FakeNews}>
            <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <Hero toggleMenu={toggleMenu}/>
            <h1 className={styles.titolo}>Fake News</h1>
            <Footer/>
        </div>
    )
}
export default FakeNews