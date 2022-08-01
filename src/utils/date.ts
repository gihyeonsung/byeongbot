export const now = (): Date => {
  const nowTimestamp = Date.now();
  return new Date(nowTimestamp);
};
