import { ImageLoaderProps } from "next/image";

export const customLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
