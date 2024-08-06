'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';

import { useSidebar } from './useSidebar';

export const useSearch = () => {
  const router = useRouter();

  const isOpen = useSidebar((store) => store.isOpen);
  const onClose = useSidebar((store) => store.onClose);

  const inputRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true);

        setTimeout(() => {
          const encodedSearchQuery = encodeURI(searchQuery);

          router.push(`/search?q=${encodedSearchQuery}`);
          setSearchQuery('');

          if (isOpen) {
            onClose();
          }

          setIsLoading(false);
        }, 5000);
      }
    },
    [isOpen, onClose, router, searchQuery]
  );

  return {
    searchQuery,
    inputRef,
    isLoading,
    handleChange,
    handleClear,
    handleSubmit,
  };
};
