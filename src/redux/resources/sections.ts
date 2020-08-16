import {resources} from 'redux-and-the-rest';

import {Section} from '../../models/section';

const url = 'http://localhost:3000/api/v1/sections';

const {
  reducers: sectionReducer,
  getOrFetchList: getOrFetchSections,
  getOrFetchItem: getOrFetchSection,
  getItem,
} = resources<Section>(
  {
    url,
    name: 'sections',
    localOnly: false,
    urlOnlyParams: ['include'],
  },
  {fetchList: true, show: true, index: true, create: true},
);

export {sectionReducer, getOrFetchSections, getOrFetchSection, getItem};
