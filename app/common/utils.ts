import {images} from '../config';

export function getImage(item: any) {
  switch (item) {
    case 'Comfort':
      return images.comfort;
    case 'UberXL':
      return images.uberXL;
    default:
      return images.uberX;
  }
}

export function getImageTop(item: any) {
  switch (item) {
    case 'Comfort':
      return images.top_comfort;
    case 'UberXL':
      return images.top_UberXL;
    default:
      return images.top_UberX;
  }
}
