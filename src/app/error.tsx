'use client';

import { useEffect } from 'react';

import EmptyState from '@/components/emptyState/EmptyState';

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <EmptyState
      title='Something went wrong'
      subtitle="We're having issues loading this page. Try again"
      imgSrc='bugs'
    />
  );
};

export default Error;
