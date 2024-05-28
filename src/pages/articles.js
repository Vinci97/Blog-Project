import articlesData from '../../../data/articles.json'; // Assicurati di avere questo file con i dati degli articoli

export default function handler(req, res) {
  const { category } = req.query;
  const filteredArticles = articlesData.filter(article => article.category === category);
  res.status(200).json(filteredArticles);
}
