import { InternalApi } from './../services/internal-api';
import { useQueryClient } from "react-query";
import { ResourceType } from "../models/item";

const prefetchQueries = {
  movie: InternalApi.getMovie,
  series: InternalApi.getSeries,
  episode: InternalApi.getEpisode
}

export const usePrefetchItem = (id: string, type: ResourceType) => {
  const queryClient = useQueryClient();
  const prefetchItem = () => queryClient.prefetchQuery(id, prefetchQueries[type])
  return prefetchItem
}