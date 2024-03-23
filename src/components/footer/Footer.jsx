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
                    <SocialIcon className={styles.icon} network="twitter" bgColor="rgba(0, 0, 0, 0)"style={{ height: 25, width: 25 }}/>
                    <SocialIcon className={styles.icon} network="instagram" bgColor="rgba(0, 0, 0, 0)"style={{ height: 25, width: 25 }}/>
                    <SocialIcon className={styles.icon} network="facebook" bgColor="rgba(0, 0, 0, 0)"style={{ height: 25, width: 25}}/>
                </div>
            </div>
        </div>
    )
}
export default Footer