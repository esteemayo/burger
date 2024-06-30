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
  const searchQuery = params.get('q') ?? null;

  const encodedSearchQuery = encodeURI(searchQuery ?? '');
  const decodedSearchQuery = decodeURI(encodedSearchQuery);

  const { isLoading, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await searchProducts(encodedSearchQuery);
      return data;
    },
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [totalItems, setTotalItems] = useState<number | null>(null);

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

  useEffect(() => {
    setTotalItems(products?.length);
  }, [products]);

  return (
    <div className='search'>
      <div className='container'>
        <Heading query={decodedSearchQuery} />
        <ProductLists data={products} loading={isLoading} />
        <Pagination
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
