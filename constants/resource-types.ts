export const MOVIE_TYPE = 'movie';
export const SERIES_TYPE = 'series';
export const EPISODE_TYPE = 'episode';

export type ResourceType =
   typeof MOVIE_TYPE
 | typeof SERIES_TYPE
 | typeof EPISODE_TYPE
