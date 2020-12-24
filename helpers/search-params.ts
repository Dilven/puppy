import { apiQueryKeys } from "../helpers/api-query-keys";
import { ApiSearchQuery } from "../models/api-search-params";

export const getQueryParams = ({ name, year, plot, page }: ApiSearchQuery) => {
  const params = new URLSearchParams()
  if(name) params.set(apiQueryKeys.name, name);
  if(year) params.set(apiQueryKeys.year, `${year}`);
  if(plot) params.set(apiQueryKeys.plot, plot);
  if(page) params.set(apiQueryKeys.page, `${page}`);
  return params.toString();
}
