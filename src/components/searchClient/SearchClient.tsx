'use client';

import { useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { useCallback, useEffect, useState } from 'react';

import Heading from './Heading';
import Pagination from '../pagination/Pagination';

import EmptyState from '../emptyState/EmptyState';
import ProductLists from '../productLists/ProductLists';

import { useSearchStore } from '@/hooks/useSearchStore';
import { searchProducts } from '@/services/productService';

import '../../app/search/Search.scss';

const SearchClient = () => {
  const params = useSearchParams();

  const isError = useSearchStore((store) => store.isError);
  const reset = useSearchStore((store) => store.reset);
  const products = useSearchStore((store) => store.products);
  const message = useSearchStore((store) => store.message);
  const isLoading = useSearchStore((store) => store.isLoading);

  const { searchProductFailure, searchProductFulfilled, searchProductPending } =
    useSearchStore();

  const page = params.get('page') ?? 1;
  const searchQuery = params.get('q') ?? null;

  const pageNumber = +page;

  const encodedSearchQuery = encodeURI(searchQuery ?? '');
  const decodedSearchQuery = decodeURI(encodedSearchQuery);

  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(pageNumber);
  const [data, setData] = useState(products);

  const handleFetchProducts = useCallback(async () => {
    searchProductPending();

    try {
      const { data } = await searchProducts(encodedSearchQuery, pageNumber);

      searchProductFulfilled(data?.products);
      setTotalItems(data?.totalProducts);
    } catch (err: unknown | any) {
      console.log(err);
      searchProductFailure(err?.response.data.message);
    }
  }, [
    encodedSearchQuery,
    pageNumber,
    searchProductFailure,
    searchProductFulfilled,
    searchProductPending,
  ]);

  useEffect(() => {
    handleFetchProducts();
    return () => reset();
  }, [handleFetchProducts, reset]);

  useEffect(() => {
    setData(products);
  }, [products]);

  useEffect(() => {
    pageNumber && setCurrentPage(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    isError && toast.error(message);
  }, [isError, message]);

  if (!isLoading && products?.length < 1) {
    return (
      <EmptyState
        title='No product found!'
        subtitle='No result matches your search criteria.'
        imgSrc='web-search'
        showReset
      />
    );
  }

  return (
    <div className='search'>
      <div className='container'>
        <Heading query={decodedSearchQuery} />
        <ProductLists
          data={data}
          loading={true}
          onLike={setData}
          onRefetch={handleFetchProducts}
        />
        <Pagination
          query={decodedSearchQuery}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default SearchClient;
