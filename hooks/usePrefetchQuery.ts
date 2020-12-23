import { useQueryClient } from "react-query";
import { getEpisode, getMovie, getSeries } from "../helpers/api";
import { ResourceType } from "../models/item";

const prefetchQueries = {
  movie: getMovie,
  series: getSeries,
  episode: getEpisode
}

export const usePrefetchItem = (id: string, type: ResourceType) => {
  const queryClient = useQueryClient();
  const prefetchItem = () => queryClient.prefetchQuery(id, prefetchQueries[type])
  return prefetchItem
}