'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';

import EmptyState from '@/components/emptyState/EmptyState';
import Spinner from '@/components/spinner/Spinner';
import ProductLists from '@/components/productLists/ProductLists';

import { getProducts } from '@/services/productService';
import { useCloseSidebar } from '@/hooks/useCloseSidebar';

import { ProductType } from '@/types';

import './Products.scss';

const ProductsClient = () => {
  const { closeHandler } = useCloseSidebar();

  const { isLoading, data, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await getProducts();
      return data;
    },
  });

  const [productToShow, setProductToShow] = useState(6);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);

  const handleSeeMore = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      setLoading(true);

      setTimeout(() => {
        setProductToShow((prev) => {
          return prev + 6;
        });
        setLoading(false);
      }, 1000);
    },
    []
  );

  const productLabel = useMemo(() => {
    return `${isLoading ? 0 : products?.length} main features`;
  }, [products?.length, isLoading]);

  const btnWrapClasses = useMemo(() => {
    return productToShow < products?.length
      ? 'btnContainer show'
      : 'btnContainer hide';
  }, [products?.length, productToShow]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if (!isLoading && products?.length < 1) {
    return (
      <EmptyState
        title='No products found!'
        subtitle='Temporarily, there are no products in the database.'
        imgSrc='empty'
        showReset
      />
    );
  }

  return (
    <div className='products' onClick={closeHandler}>
      <div className='container'>
        <h3>
          Most popular near you
          <small>
            <Link href='/products'>{productLabel}</Link>
          </small>
        </h3>
        <ProductLists
          type='products'
          data={products}
          loading={isLoading}
          productToShow={productToShow}
          onLike={setProducts}
          onRefetch={refetch}
        />
        {!isLoading && (
          <div className={btnWrapClasses}>
            <button type='button' disabled={loading} onClick={handleSeeMore}>
              {loading ? <Spinner color='#a00c1a' /> : 'See more...'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsClient;
