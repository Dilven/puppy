import { SearchParams } from './../models/search-params';

export const paramsAliases: Record<keyof SearchParams, string> = {
  name: 's',
  year: 'y',
  plot: 'plot',
  id: 'i',
  page: 'page',
}