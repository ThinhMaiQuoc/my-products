import { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';

export const useProductReviews = ({ slug }) => {
  const [productReviews, setProductReviews] = useState([]);

  const fetchProductReviews = () => {
    if (slug) {
      axiosConfig
        .get('/Reviews?filterByFormula=ProductID+%3D+' + slug)
        .then((response) => {
          if (response.statusText != 'OK') {
            throw Error('Could not fetch the data...');
          } else if (response && response.data) {
            setProductReviews(response.data.records);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    fetchProductReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return { productReviews };
};
