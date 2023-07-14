import { ImageProps } from 'next/image';
import Img from './Img';

interface IAutoHeightImg extends Omit<ImageProps, 'width'> {
  width?: string | number;
}

const AutoHeightImg = ({ width = '100%', ...props }: IAutoHeightImg) => (
  <Img
    {...props}
    width={0}
    height={0}
    sizes="100vw"
    style={{ ...props?.style, width, height: 'auto' }}
  />
);

export default AutoHeightImg;
