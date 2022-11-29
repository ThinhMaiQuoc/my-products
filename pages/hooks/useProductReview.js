import { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';

export const useProductReviews = ({ slug }) => {
  const [productReviews, setProductReviews] = useState([]);

  const fetchProductReviews = () => {
    if (slug) {
      axiosConfig
        .get('/Reviews?filterByFormula=ProductID+%3D+' + slug)
        .then((response) => {
          if (response && response.data) {
            setProductReviews(response.data.records);
          }
        });
    }
  };

  useEffect(() => {
    fetchProductReviews();
  }, [slug]);

  return { productReviews };
};
