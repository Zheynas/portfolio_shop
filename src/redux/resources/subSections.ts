import {resources} from 'redux-and-the-rest';
import Jsona from 'jsona';

import {SubSection} from '../../models/subSection';

const dataFormatter = new Jsona();
const url = 'http://localhost:3000/api/v1/sections/:id/sub_sections';

const {
  reducers: subSectionReducer,
  getOrFetchCollection: getOrFetchSubSections,
  getOrFetchItem: getOrFetchSubSection,
} = resources<SubSection>(
  {
    url,
    name: 'subSections',
    localOnly: false,
    requestAdaptor: (subSection: any) => dataFormatter.serialize({ stuff: subSection }),
    urlOnlyParams: ['include']
  },
  ['index'],
);

export {subSectionReducer, getOrFetchSubSections, getOrFetchSubSection};
