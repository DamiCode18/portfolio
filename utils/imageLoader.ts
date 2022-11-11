import { ImageLoaderProps } from "next/image";

export const customLoader = ({ src, width, quality }: ImageLoaderProps) => {
  src = src.startsWith("/") ? src.replace("/", "") : src;
  return `${src}?w=${width}&q=${quality || 75}`;
};
