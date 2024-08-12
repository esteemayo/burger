export const formatPhone = (phone: string) => {
  const cleanedValue = phone.replace(/\D/g, '').slice(0, 10);
  const formattedValue = cleanedValue.replace(
    /(\d{3})(\d{3})(\d{4})/,
    '($1) $2-$3'
  );

  const formattedPhone = `+1 ${formattedValue}`;
  return {
    formattedPhone,
    formattedValue,
  };
};
