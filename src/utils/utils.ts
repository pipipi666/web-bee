export const getStr = (value: number) => {
  return `${value < 10 ? value.toString().padStart(2, "0") : value}`;
};

export const getTime = (time: number) => {
  const hours = Math.floor(time / 3600);
  const mins = Math.floor((time - 3600 * hours) / 60);
  const seconds = time % 60;
  return `${getStr(hours)}:${getStr(mins)}:${getStr(seconds)}`;
};
