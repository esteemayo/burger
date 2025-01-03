'use client';

import { useCallback, useEffect, useState } from 'react';

export const useForm = <T extends object, U extends object>(
  callback: () => void,
  initialState: T,
  initialErrors: U,
  validate: (data: T) => U
) => {
  const [data, setData] = useState<T>(initialState);
  const [errors, setErrors] = useState<U>(initialErrors);

  const handleChange = useCallback(
    ({
      target: input,
    }: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >) => {
      const { name, value } = input;

      setData((prev) => {
        return { ...prev, [name]: value };
      });
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const errors = validate(data);

      if (Object.keys(errors).length > 0) {
        setErrors(validate(data));
        return;
      }

      setErrors(initialErrors);

      callback();
      setData(initialState);
    },
    [callback, data, initialErrors, initialState, validate]
  );

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setTimeout(() => setErrors(initialErrors), 5000);
    }
  }, [errors, initialErrors]);

  return {
    data,
    errors,
    handleChange,
    handleSubmit,
    setData,
  };
};
