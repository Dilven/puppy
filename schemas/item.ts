import * as z from 'zod';
import { MOVIE_TYPE, EPISODE_TYPE, SERIES_TYPE } from '../constants/resource-types';

export const ItemSchema = z.object({
  Title: z.string(),
  Poster: z.string(),
  Type: z.union([z.literal(MOVIE_TYPE), z.literal(SERIES_TYPE), z.literal(EPISODE_TYPE)]),
  Year: z.string(),
  imdbID: z.string(),
})

export const ItemPreviewSchema = ItemSchema.extend({
  Actors: z.string(),
  Awards: z.string(),
  Country: z.string(),
  Director: z.string(),
  Genre: z.string(),
  Language: z.string(),
  Metascore: z.string(),
  Plot: z.string(),
  Rated: z.string(),
  Ratings: z.array(z.object({
    Source: z.string(),
    Value: z.string(),
  })),
  Released: z.string(),
  Response: z.string(),
  Runtime: z.string(),
  Writer: z.string(),
  imdbRating:  z.string(),
  imdbVotes: z.string(),
  Production: z.string(),
  BoxOffice: z.string(),
  Website: z.string(),
  DVD: z.string(),
})
