import { useForm } from "react-hook-form";
import { useQueryCache, useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { QueryKey } from "../constants/queries-keys";
import { SearchQuery } from "../helpers/api";
import { rejectEmpty } from "../helpers/reject-empty";
import { getQueryParams } from "../helpers/search-params";
import { SearchParams } from "../models/search-params";

type FormData = {
  year?: { year: () => string };
  name?: string;
}

export const useSearchForm = (queryKey: QueryKey, query: SearchQuery, redirectPath: string) => {
  const history = useHistory();
  const cache = useQueryCache();
  const { handleSubmit, control } = useForm();

  const [mutate, { isLoading }] = useMutation(async (data: SearchParams) => query(data), {
    onSuccess: (data, variables) => {
      cache.setQueryData([queryKey, {...variables, page: '1' }], data)
      const searchParams = getQueryParams({...variables, page: '1' });
      history.push(`${redirectPath}?${searchParams}`);
    }
  });

  const onSubmit = handleSubmit(async (data: FormData) => {
    const year = data.year?.year();
    const params: SearchParams = { ...data, year: year ? `${year}` : null }
    await mutate(rejectEmpty(params));
  })

  return { onSubmit, control, isLoading }
}