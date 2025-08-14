export const publicAsset = (path: string): string => {
  const cleaned = path.replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${cleaned}`;
};


