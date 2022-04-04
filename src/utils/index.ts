export const removeSlash = (string = '') => {
  return string.substring(1);
};

export function shuffleArray<T>(array: T[]): T[] {
  const copy = array.slice(0);
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
