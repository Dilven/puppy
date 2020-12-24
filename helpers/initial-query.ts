import { apiQueryKeys } from "./api-query-keys";
import { rejectEmpty } from "./reject-empty";

import { ParsedUrlQuery } from "querystring";

export const getInitialQuery = (query: ParsedUrlQuery) => {
  return rejectEmpty({
    name: query[apiQueryKeys.name],
    year: query[apiQueryKeys.year],
    plot: query[apiQueryKeys.plot],
    page: query[apiQueryKeys.page],
  })
}
