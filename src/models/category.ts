import {ImageSourcePropType} from 'react-native';
import {SubCategory} from './subCategory';

export interface Category {
  name: string;
  imagePath: ImageSourcePropType;
  subcategories: SubCategory[];
  id: string;
}
