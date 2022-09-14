type IType = {
  src: string;
  width: number;
  quality?: number;
};

export const customLoader = ({ src, width, quality }: IType) => {
  src = src.startsWith("/") ? src.replace("/", "") : src;
  return src.includes('static') ? src : `https://strapi-wkp6.onrender.com/${src}?w=${width}&q=${
    quality || 75
  }`;
};
