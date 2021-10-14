import { ImgProps } from "../types";

export const ImgPers = ({ src, width, height }: ImgProps) => (
  <img src={`/img/${src}`} alt={src} width={width} height={height} />
);
