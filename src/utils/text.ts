export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
};

export const removeWhitespaces = (string: string) => string.replace(/\s+/g, ' ').trim();
