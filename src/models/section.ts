import {SubSection} from './subSection';

export interface Section {
  id: string;
  name: string;
  title: string;
  bannerUrl: string;
  subSections: SubSection[];
}
