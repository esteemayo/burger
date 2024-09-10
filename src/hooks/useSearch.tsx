'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';

import { useSidebar } from './useSidebar';
import { useSearchStore } from './useSearchStore';

export const useSearch = () => {
  const router = useRouter();

  const onClose = useSidebar((store) => store.onClose);
  const isOpen = useSidebar((store) => store.isOpen);
  const searchProductPending = useSearchStore(
    (store) => store.searchProductPending
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleClear = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setSearchQuery('');
    inputRef && inputRef.current?.focus();
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (searchQuery) {
        searchProductPending();
        const encodedSearchQuery = encodeURI(searchQuery);

        router.push(`/search?q=${encodedSearchQuery}`);
        setSearchQuery('');

        if (isOpen) {
          onClose();
        }
      }
    },
    [isOpen, onClose, router, searchProductPending, searchQuery]
  );

  return {
    searchQuery,
    inputRef,
    handleChange,
    handleClear,
    handleSubmit,
  };
};
