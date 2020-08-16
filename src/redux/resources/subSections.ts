import {resources} from 'redux-and-the-rest';

import {SubSection} from '../../models/subSection';

const url = 'http://localhost:3000/api/v1/sections/:id/sub_sections';

const {
  reducers: subSectionReducer,
  getOrFetchList: getOrFetchSubSections,
  getOrFetchItem: getOrFetchSubSection,
} = resources<SubSection>(
  {
    url,
    name: 'subSections',
    localOnly: false,
    urlOnlyParams: ['include'],
  },
  {fetchList: true, show: true, index: true, create: true},
);

export {subSectionReducer, getOrFetchSubSections, getOrFetchSubSection};
