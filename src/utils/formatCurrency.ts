const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'usd',
  style: 'currency',
});

export const formatCurrency = (value: number) => {
  return CURRENCY_FORMATTER.format(value);
};
