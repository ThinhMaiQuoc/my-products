import { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axiosConfig
      .get('/Product')
      .then((response) => {
        if (response.statusText != 'OK') {
          throw Error('Could not fetch the data...');
        } else if (response && response.data) {
          setProducts(response.data.records);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return { products };
};
