import { getImage } from 'astro:assets';
import type { UnresolvedImageTransform } from 'astro';

import _Slider1 from './Slider1.png';
import _Slider2 from './Slider2.png';
import _Slider3 from './Slider3.png';
import _Slider4 from './Slider4.png';
import _TUTIICLogo from './tut_iic_logo.svg';

async function optimizeImage(
  image: ImageMetadata,
  options?: Omit<UnresolvedImageTransform, 'src'>,
) {
  return (await getImage({ src: image, ...options })).src;
}

export const TUTIICLogo = await optimizeImage(_TUTIICLogo);

export const Slider1 = await optimizeImage(_Slider1, {
  width: 1920,
});

export const Slider2 = await optimizeImage(_Slider2, {
  width: 1920,
});

export const Slider3 = await optimizeImage(_Slider3, {
  width: 1920,
});

export const Slider4 = await optimizeImage(_Slider4, {
  width: 1920,
});
