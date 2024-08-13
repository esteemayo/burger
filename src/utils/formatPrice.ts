export const formatPrice = (price: string) => {
  const cleanedValue = price.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  const formattedPrice = cleanedValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  return {
    formattedPrice,
  };
};
