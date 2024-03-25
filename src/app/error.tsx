'use client';

import { useEffect } from 'react';

import ErrorState from '@/components/errorState/ErrorState';

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <ErrorState />;
};

export default Error;
