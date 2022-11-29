import Image from 'next/image';
import React, { useState } from 'react';

const ProductImg = ({ fields, isProductDetail }) => {
  const productImg1 = fields.pictures[0].url;
  const productImg2 = fields.pictures[1].url;
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(true);
  };
  const handleLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <Image
        unoptimized={true}
        priority
        width={500}
        height={500}
        src={isHover ? productImg1 : productImg2}
        alt={fields.Name}
        className="rounded shadow object-cover h-64 w-full"
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleLeave()}
        layout={isProductDetail ? 'responsive' : ''}
      />
    </>
  );
};

export default ProductImg;
