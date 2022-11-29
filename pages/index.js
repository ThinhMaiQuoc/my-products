import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import { useProducts } from './hooks/useProducts';

export default function Home() {
  const { products } = useProducts();
  return (
    <>
      {products ? (
        <Layout title="Home Page">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4" data-testid="products-result">
            {products.map((product) => (
              <ProductList product={product} key={product.id}></ProductList>
            ))}
          </div>
        </Layout>
      ) : null}
    </>
  );
}
