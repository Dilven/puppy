import { useHistory } from "react-router-dom";
import { apiQueryKeys } from "../helpers/api-query-keys";
import { rejectEmpty } from "../helpers/reject-empty";

export const useSearchParams = () => {
  const router = useRouter()
  const searchParams = new URLSearchParams(history.location.search);

  const params = {
    name: searchParams.get(apiQueryKeys.name),
    year: searchParams.get(apiQueryKeys.year),
    plot: searchParams.get(apiQueryKeys.plot),
    page: searchParams.get(apiQueryKeys.page),
  }

  return rejectEmpty(params);
}