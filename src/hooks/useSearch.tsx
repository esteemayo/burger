'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';

export const useSearch = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  const handleClear = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setQuery('');
    inputRef && inputRef.current?.focus();
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (query) {
        const encodedQuery = encodeURI(query);

        router.push(`/search?q=${encodedQuery}`);
        console.log(query);
        setQuery('');
      }
    },
    [query, router]
  );

  return {
    query,
    inputRef,
    handleChange,
    handleClear,
    handleSubmit,
  };
};
