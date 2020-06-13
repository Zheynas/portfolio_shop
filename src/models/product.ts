import {ImageSourcePropType} from 'react-native';

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  smallPicture: ImageSourcePropType;
  largePicture: ImageSourcePropType;
  dateAdded: number;
  rating: number;
}
