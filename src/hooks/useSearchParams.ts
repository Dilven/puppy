import { useHistory } from "react-router-dom";
import { paramsAliases } from "../constants/params-aliases";
import { rejectEmpty } from "../helpers/reject-empty";

export const useSearchParams = () => {
  const history = useHistory();
  const searchParams = new URLSearchParams(history.location.search);

  const params = {
    name: searchParams.get(paramsAliases.name),
    year: searchParams.get(paramsAliases.year),
    plot: searchParams.get(paramsAliases.plot),
    page: searchParams.get(paramsAliases.page),
    id: searchParams.get(paramsAliases.id),
  }

  return rejectEmpty(params);
}