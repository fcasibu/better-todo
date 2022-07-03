export const sleep = (delay: number) => {
  return new Promise((res) => {
    setTimeout(res, delay);
  });
};
