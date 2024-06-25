import { SocialIcon } from "react-social-icons";
import styles from "./footer.module.scss";
import { useState, useEffect } from "react";

const Footer = () => {
    const [iconSize, setIconSize] = useState(34);

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth >= 768 ? setIconSize(50) : setIconSize(34); 
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.Footer}>
            <div className={styles.container1}>
                <div className={styles.titoli}>
                    <h3>CONTATTI</h3>
                </div>
                <div className={styles.footerContatti}>
                    <a href="mailto:postmaster@il-blog-di-michele-vacca.it">postmaster@il-blog-di-michele-vacca.it</a>
                </div>
            </div>
            <div className={styles.container2}>
                <div className={styles.titoli}>
                    <h3>SEGUIMI</h3>
                </div>
                <div className={styles.footerSocial}>
                    <SocialIcon className={styles.icon} network="tiktok" bgColor="rgba(0, 0, 0, 0)" style={{ height: iconSize, width: iconSize }} url="https://www.tiktok.com/@michele.vacca.blog?_t=8mrJ15DgGkS&_r=1" target="_blank" rel="noopener noreferrer" />
                    <SocialIcon className={styles.icon} network="youtube" bgColor="rgba(0, 0, 0, 0)" style={{ height: iconSize, width: iconSize }} url="https://www.youtube.com/channel/UC_a5LsGJWmwSCDoV0SbD9AQ" target="_blank" rel="noopener noreferrer" />
                    <SocialIcon className={styles.icon} network="instagram" bgColor="rgba(0, 0, 0, 0)" style={{ height: iconSize, width: iconSize }} url="https://www.instagram.com/blogdimichelevacca/?igsh=MXBiMHh4NnB2NGtubQ%3D%3D" target="_blank" rel="noopener noreferrer" />
                    <SocialIcon className={styles.icon} network="facebook" bgColor="rgba(0, 0, 0, 0)" style={{ height: iconSize, width: iconSize }} url="https://www.facebook.com/profile.php?id=100063728582740" target="_blank" rel="noopener noreferrer" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
