import {SubSection} from './subSection';

export interface Section {
  id: string;
  name: string;
  title: string;
  image: string;
  subSections: SubSection[];
}
