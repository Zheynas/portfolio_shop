import { Category } from './category';

export interface SubSection {
  id: string;
  title: string;
  categories: Category[];
}
