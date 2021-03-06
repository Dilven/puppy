import { useQueryClient } from 'react-query';
import { GetQuery, InternalApi } from '../services/internal-api';
import { ResourceType } from '../models/item';

const prefetchQueries: Record<ResourceType, GetQuery> = {
  movie: InternalApi.getMovie,
  series: InternalApi.getSeries,
  episode: InternalApi.getEpisode,
};

export const usePrefetchItem = (id: string, type: ResourceType) => {
  const queryClient = useQueryClient();
  const prefetchItem = () => queryClient.prefetchQuery(id, () => prefetchQueries[type](id));
  return prefetchItem;
};
