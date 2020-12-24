import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'
import { useQueryClient, useMutation } from "react-query";
import { ResourceType } from "../constants/resource-types";
import { DEFAULT_PAGE } from "../constants/search-params";
import { rejectEmpty } from "../helpers/reject-empty";
import { getQueryParams } from "../helpers/search-params";
import { ApiSearchQuery } from "../models/api-search-params";
import { SearchQuery } from "../services/internal-api";

type FormData = {
  year?: { year: () => string };
  name?: string;
}

export const useSearchForm = (queryKey: ResourceType, query: SearchQuery, redirectPath: string) => {
  const router = useRouter()
  const queryClient = useQueryClient();
  const { handleSubmit, control } = useForm();

  const { mutate, isLoading } = useMutation(query, {
    onSuccess: (data, variables) => {
      const searchParams = {...variables, page: DEFAULT_PAGE }
      queryClient.setQueryData([queryKey, searchParams], data)
      const searchParamsUrl = getQueryParams(searchParams);
      router.push(`${redirectPath}?${searchParamsUrl}`, undefined, { shallow: true });
    }
  });

  const onSubmit = handleSubmit(async (data: FormData) => {
    const year = data.year?.year();
    const params: ApiSearchQuery = { ...data, year: year ? `${year}` : undefined }
    await mutate(rejectEmpty(params));
  })

  return { onSubmit, control, isLoading }
}