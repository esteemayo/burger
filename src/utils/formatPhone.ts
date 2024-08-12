export const formatPhone = (phone: string) => {
  const formattedPhone = phone.replace(/\D/g, '').slice(0, 10);
  const formattedValue = formattedPhone.replace(
    /(\d{3})(\d{3})(\d{4})/,
    '($1) $2-$3'
  );

  const newPhone = `+1 ${formattedValue}`;
  return {
    newPhone,
    formattedValue,
  };
};
