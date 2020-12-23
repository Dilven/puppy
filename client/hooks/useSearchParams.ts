import { useHistory } from "react-router-dom";
import { apiQueryKeys } from "../../shared/api-query-keys";
import { rejectEmpty } from "../helpers/reject-empty";

export const useSearchParams = () => {
  const router = useRouter()
  console.log('DEBUGGING:  ~ file: useSearchParams.ts ~ line 7 ~ useSearchParams ~ router', router.query);
  const searchParams = new URLSearchParams(history.location.search);

  const params = {
    name: searchParams.get(apiQueryKeys.name),
    year: searchParams.get(apiQueryKeys.year),
    plot: searchParams.get(apiQueryKeys.plot),
    page: searchParams.get(apiQueryKeys.page),
  }

  return rejectEmpty(params);
}