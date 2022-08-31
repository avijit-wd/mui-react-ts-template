export const capitalizeLetters = (str: string) =>
  str
    .split(' ')
    .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1))
    .join(' ');
