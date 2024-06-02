import { SocialIcon } from "react-social-icons"
import styles from "./footer.module.scss"
const Footer = ()=> {
    return(
        <div className={styles.Footer}>
            <div className={styles.footerContatti}>
                <h3>CONTATTI</h3>
                <p className={styles.footerTxtContatti}><span>Michele Vacca:</span> web@MicheleVacca.it</p>
            </div>
            <div className={styles.footerSocial}>
                <h3>SEGUIMI</h3>
                <div className={styles.footerIconeSocial}>
                    <SocialIcon className={styles.icon} network="tiktok" bgColor="rgba(0, 0, 0, 0)"style={{ height: 34, width: 34 }} url="https://www.tiktok.com/@michele.vacca.blog?_t=8mrJ15DgGkS&_r=1"target="_blank"rel="noopener noreferrer"/>
                    <SocialIcon className={styles.icon} network="youtube" bgColor="rgba(0, 0, 0, 0)"style={{ height: 34, width: 34}} url="https://www.youtube.com/channel/UC_a5LsGJWmwSCDoV0SbD9AQ"target="_blank"rel="noopener noreferrer"/>
                    <SocialIcon className={styles.icon} network="instagram" bgColor="rgba(0, 0, 0, 0)"style={{ height: 34, width: 34 }}url="https://www.instagram.com/vacca_michele/"target="_blank"rel="noopener noreferrer"/>
                    <SocialIcon className={styles.icon} network="facebook" bgColor="rgba(0, 0, 0, 0)"style={{ height: 34, width: 34}} url="https://www.facebook.com/michele.vacca.99"target="_blank"rel="noopener noreferrer"/>
                </div>
            </div>
        </div>
    )
}
export default Footer