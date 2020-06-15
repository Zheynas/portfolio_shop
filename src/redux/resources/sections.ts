import {resources} from 'redux-and-the-rest';
import Jsona from 'jsona';

import {Section} from '../../models/section';

const dataFormatter = new Jsona();
const url = 'http://localhost:3000/api/v1/sections';

const {
  reducers: sectionReducer,
  getOrFetchCollection: getOrFetchSections,
  getOrFetchItem: getOrFetchSection,
  getItem,
} = resources<Section>(
  {
    url,
    name: 'sections',
    localOnly: false,
    requestAdaptor: (sections: any) => dataFormatter.serialize({ stuff: sections }),
    urlOnlyParams: ['include']
  },
  ['index', 'show'],
);

export {sectionReducer, getOrFetchSections, getOrFetchSection, getItem};
