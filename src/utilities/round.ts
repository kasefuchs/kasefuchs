export const round = (num: number, digits: number = 3): number => {
  const exp = 10 ** digits;
  return Math.round(num * exp) / exp;
}