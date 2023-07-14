import { ChakraComponent, chakra } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';

const Img: ChakraComponent<'img', ImageProps> = chakra(Image, {
  shouldForwardProp: (prop) =>
    [
      'src',
      'width',
      'height',
      'alt',
      'loader',
      'fill',
      'sizes',
      'style',
      'quality',
      'priority',
      'placeholder',
      'onLoadingComplete',
      'onLoad',
      'onError',
      'loading',
      'blurDataURL',
    ].includes(prop),
});

export default Img;
