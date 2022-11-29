import { useEffect, useState } from 'react';

export const useImgUrl = ({ url }) => {
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    setImgUrl(url);
  }, [url]);

  return { imgUrl };
};
