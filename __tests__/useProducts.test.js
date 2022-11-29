import { render, renderHook, screen } from '@testing-library/react';
import { useProducts } from '../pages/hooks/useProducts';

jest.mock('../pages/hooks/useProducts', () => {
  useProductsMock: jest.fn();
});

import useProductsMock from '../pages/hooks/useProducts';
import Home from '../pages';

describe('/Products', () => {
  it('should init', async () => {
    const { result } = renderHook(() => useProducts());
    expect(result.current.products.length).toBe(0);
  });

  it('should return array of products', async () => {
    // const { result } = renderHook(() => useProducts());
    // console.log(result.current);
    // const hooks = { useProducts };
    // jest.spyOn(hooks, 'useProducts').mockImplementation(() => [{ id: 1 }]);
    // expect(screen.getByTestId('products-result')).toHaveReturned();
    jest.spyOn(useProductsMock);
    render(<Home />);
    expect(useProductsMock).toHaveBeenCalled();
  });
});
