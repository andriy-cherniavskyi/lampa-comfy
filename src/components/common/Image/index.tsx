import { TImageProps } from './types';
import { FC, memo } from 'react';

const Image: FC<TImageProps> = memo(({ src, width = 180, height = 180, alt }) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
});

Image.displayName = 'Image';

export default Image;
