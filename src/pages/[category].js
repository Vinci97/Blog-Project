import { useRouter } from 'next/router';
import ArticlesByCategory from '../../components/ArticlesByCategory';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1>Category: {category}</h1>
      <ArticlesByCategory category={category} />
    </div>
  );
};

export default CategoryPage;
