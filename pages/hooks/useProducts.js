import { useEffect, useState } from 'react';
import axiosConfig from '../axios/axiosConfig';

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axiosConfig.get('/Product').then((response) => {
      if (response && response.data) {
        setProducts(response.data.records);
      }
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return { products };
};
