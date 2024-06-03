module.exports = {
  siteUrl: 'https://www.il-blog-di-michele-vacca.it/', // Sostituisci con il tuo dominio
  generateRobotsTxt: true, // Genera anche il file robots.txt
  exclude: ['/api/*'], // Escludi le rotte API dalla sitemap
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  outDir: 'public', // Directory di output per sitemap e robots.txt
}
