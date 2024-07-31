const TIME_FORMATTER = new Intl.DateTimeFormat('en-us', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
});

export const formatTime = (date: string) => {
  return TIME_FORMATTER.format(new Date(date));
};
