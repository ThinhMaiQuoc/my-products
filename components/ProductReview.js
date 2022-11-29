import Link from 'next/link';
import React from 'react';
import Review from './Review';

const ProductReviews = ({ productReviews }) => {
  return (
    <>
      <div className="mt-10 pb-5">
        <h2>Customer Reviews: </h2>
      </div>

      {productReviews ? (
        <div className='block'>
          {productReviews.map((review) => (
            <Review review={review} key={review.id}></Review>
          ))}
        </div>
      ) : (
        'No reviews for this product'
      )}

      {/* TBD */}
      <Link href='/reviews' className='text-blue-400'>See all review</Link>
    </>
  );
};

export default ProductReviews;
