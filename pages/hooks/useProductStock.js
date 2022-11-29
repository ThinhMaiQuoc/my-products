import { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';

export const useProductStock = ({ slug }) => {
  const [productAvailability, setProductAvailability] = useState('');

  const fetchProductStock = () => {
    if (slug) {
      axiosConfig
        .get('/Stock?filterByFormula=ProductID+%3D+' + slug)
        .then((response) => {
          let stock;
          if (response && response.data) {
            stock = response.data.records[0].fields.Stock;
          }
          return stock;
        })
        .then((stock) => {
          if (stock > 10) {
            setProductAvailability('In stock');
          } else if (stock === 0) {
            setProductAvailability('No stock available');
          } else {
            setProductAvailability('Only ' + stock + ' items available');
          }
        });
    }
  };

  useEffect(() => {
    fetchProductStock();
  }, [slug]);
  return { productAvailability };
};
