import { ParsedUrlQuery } from 'querystring';
import { apiQueryKeys } from './api-query-keys';
import { rejectEmpty } from './reject-empty';

export const getInitialQuery = (query: ParsedUrlQuery) => rejectEmpty({
  name: query[apiQueryKeys.name],
  year: query[apiQueryKeys.year],
  plot: query[apiQueryKeys.plot],
  page: query[apiQueryKeys.page],
});
