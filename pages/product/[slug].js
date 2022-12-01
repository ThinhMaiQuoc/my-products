import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import { useProducts } from '../../hooks/useProducts';
import { useProductStock } from '../../hooks/useProductStock';
import ProductImg from '../../components/ProductImg';
import ProductReviews from '../../components/ProductReview';
import { useProductReviews } from '../../hooks/useProductReview';

export default function ProductDetail() {
  const { products } = useProducts();
  const { query } = useRouter();
  const { slug } = query;
  const { productAvailability } = useProductStock({ slug });
  const { productReviews } = useProductReviews({ slug });
  const product = products.find(
    (product) => product.fields.Id.toString() === slug
  );
  return (
    <>
      {product ? (
        <Layout title={product.fields.Name}>
          <div className="py-2 bg-sky-600 hover:bg-sky-800 w-40 h-10 mb-5 text-center rounded-md">
            <Link href="/" className="text-white font-medium">
              Back to products
            </Link>
          </div>
          <div className="grid md:grid-cols-4 md:gap-3">
            <div className="md:col-span-2">
              <ProductImg fields={product.fields} isProductDetail={true} />
            </div>

            <div>
              <ul>
                <li>
                  <h1 className="text-lg">{product.fields.Name}</h1>
                </li>
                <li className='pt-3'>Brand: {product.fields.Brand}</li>
                <li className='pt-3'>Description: {product.fields.Description}.</li>
              </ul>
              {productReviews ? (
                <div className="md:col-span-2">
                  <ProductReviews productReviews={productReviews} />
                </div>
              ) : 'Loading...'}
            </div>

            <div>
              <div className="detailCard p-5">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>${product.fields.Price}</div>
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  <div>{productAvailability ? productAvailability : null}</div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      ) : null}
    </>
  );
}
