const formatter = new Intl.DateTimeFormat('en-us', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

export const formatDate = (date?: number | Date) => {
  return formatter.format(date);
};
