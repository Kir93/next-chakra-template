import { chakra } from '@chakra-ui/react';
import Image from 'next/image';

const Img = chakra(Image, {
  shouldForwardProp: (prop) =>
    ['width', 'height', 'src', 'alt', 'quality', 'placeholder', 'blurDataURL', 'loader '].includes(
      prop,
    ),
});

export default Img;
