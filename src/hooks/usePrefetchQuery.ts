import { useQueryCache } from "react-query";
import { getEpisode, getMovie, getSerie } from "../helpers/api";
import { ResourceType } from "../models/item";

const prefetchQueries = {
  movie: getMovie,
  series: getSerie,
  episode: getEpisode
}

export const usePrefetchItem = (id: string, type: ResourceType) => {
  const cache = useQueryCache();
  const prefetchItem = () => cache.prefetchQuery(id, prefetchQueries[type])
  return prefetchItem
}