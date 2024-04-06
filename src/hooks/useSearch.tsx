'use client';

import { useCallback, useState } from 'react';

export const useSearch = () => {
  const [query, setQuery] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log(query);
      setQuery('');
    },
    [query]
  );

  return {
    query,
    handleChange,
    handleSubmit,
  };
};
