import { getImage } from 'astro:assets';
import _Slider1 from '../assets/Slider1.png';
import _Slider2 from '../assets/Slider2.png';
import _Slider3 from '../assets/Slider3.png';
import _Slider4 from '../assets/Slider4.png';
export { default as TUTIICLogo } from './tut_iic_logo.svg';

export const Slider1 = await getImage({
  src: _Slider1,
  width: 1920,
});

export const Slider2 = await getImage({
  src: _Slider2,
  width: 1920,
});

export const Slider3 = await getImage({
  src: _Slider3,
  width: 1920,
});

export const Slider4 = await getImage({
  src: _Slider4,
  width: 1920,
});
