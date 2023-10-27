import Hero from "@/components/Hero"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useState } from "react"
import styles from "../styles/ComeFare.module.scss"
const ComeFare = ()=> {
    const [menuAperto, setMenuAperto] = useState(false);

    const toggleMenu = () => {
     setMenuAperto(prevMenuAperto => !prevMenuAperto);
    };
    return(
        <div className={styles.ComeFare}>
            <Header isOpen={menuAperto} toggleMenu={toggleMenu}/>
            <Hero toggleMenu={toggleMenu}/>
            <h1 className={styles.titolo}>Come Fare</h1>
            <Footer/>
        </div>
    )
}
export default ComeFare