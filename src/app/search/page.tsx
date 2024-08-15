import type { Metadata } from 'next';

import SearchClient from '@/components/searchClient/SearchClient';

export const metadata: Metadata = {
  title: 'Burger. App | Search',
};

const Search = () => {
  return <SearchClient />;
};

export default Search;
