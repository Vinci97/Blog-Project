import styles from "./notizie.module.scss"
const Notizie = ({ articles }) =>{
    return(
     <div className={styles.notizie}>
      {articles.map((article, id) => (
        <div key={id}>
          <h2>{article.titolo}</h2>
          <p>{article.contenuto}</p>
        </div>
      ))}
     </div>
    );
};
export default Notizie