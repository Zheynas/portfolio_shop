import { SubSubCategory } from './subSubCategory';

export interface SubCategory {
  id: string;
  header: string;
  categories: SubSubCategory[];
}
