'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import Heading from './Heading';
import Pagination from '../pagination/Pagination';

import EmptyState from '../emptyState/EmptyState';
import ProductLists from '../productLists/ProductLists';

import { searchProducts } from '@/services/productService';

import '../../app/search/Search.scss';

const SearchClient = () => {
  const params = useSearchParams();

  const page = params.get('page') ?? 1;
  const searchQuery = params.get('q') ?? null;

  const pageNumber = +page;

  const encodedSearchQuery = encodeURI(searchQuery ?? '');
  const decodedSearchQuery = decodeURI(encodedSearchQuery);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(pageNumber);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const { data } = await searchProducts(encodedSearchQuery, pageNumber);
        setProducts(data?.products);
        setTotalItems(data?.totalProducts);
      } catch (err: unknown) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [encodedSearchQuery, pageNumber]);

  if (products?.length < 1) {
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
        <ProductLists data={products} loading={isLoading} />
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
