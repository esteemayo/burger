'use client';

import { useCallback, useRef, useState } from 'react';

export const useSearch = () => {
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

      console.log(query);
      setQuery('');
    },
    [query]
  );

  return {
    query,
    inputRef,
    handleChange,
    handleClear,
    handleSubmit,
  };
};
