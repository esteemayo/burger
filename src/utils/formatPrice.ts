export const formatPrice = (price: string) => {
  const cleanedValue = price.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

  const rawPrice = parseFloat(cleanedValue) || 0;
  const formattedPrice = cleanedValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  return {
    rawPrice,
    formattedPrice,
  };
};
