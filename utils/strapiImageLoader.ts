type IType = {
  src: string;
  width: number;
  quality?: number;
};

export const customLoader = ({ src, width, quality }: IType) => {
  src = src.startsWith("/") ? src.replace("/", "") : src;
  return src;
};
