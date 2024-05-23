export const init = () => {};

export const log = (error: Error) => {
  console.log(error);
};

const logger = {
  init,
  log,
};

export default logger;
