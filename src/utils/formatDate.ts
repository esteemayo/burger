const formatter = new Intl.DateTimeFormat('en-us', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

export const formatDate = (date?: string | number | Date) => {
  return formatter.format(date);
};
