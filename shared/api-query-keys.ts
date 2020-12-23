import { ApiSearchQuery } from "./models/api-search-params";

export const apiQueryKeys: Record<keyof ApiSearchQuery, string> = {
  name: 'name',
  year: 'year',
  plot: 'plot',
  page: 'page',
}