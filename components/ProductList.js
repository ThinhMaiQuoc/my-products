import Link from 'next/link';
import React from 'react';
import ProductImg from './ProductImg';

const ProductList = ({ product }) => {
  return (
    <div className="productCard">
      <Link href={`/product/${product.fields.Id}`}>
        <ProductImg fields={product.fields} isProductDetail={false} />
      </Link>
      <div className="text-center p-5">
        <Link href={`/product/${product.fields.Id}`}>
          <div className="text-lg">
            <p className="truncate hover:overflow-visible">
              {product.fields.Name}
            </p>
          </div>
        </Link>
        <p className="mb-2">{product.fields.Brand}</p>
        <p>${product.fields.Price}</p>
      </div>
    </div>
  );
};

export default ProductList;
