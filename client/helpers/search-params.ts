import { ApiSearchParams } from "../../shared/models/api-search-params";
import { paramsAliases } from "../constants/params-aliases";

export const getQueryParams = ({ name, year, plot, id, page }: ApiSearchParams) => {
  const params = new URLSearchParams()
  if(name) params.set(paramsAliases.name, name);
  if(year) params.set(paramsAliases.year, `${year}`);
  if(plot) params.set(paramsAliases.plot, plot);
  if(id) params.set(paramsAliases.id, `${id}`);
  if(page) params.set(paramsAliases.page, `${page}`);
  return params.toString();
}
