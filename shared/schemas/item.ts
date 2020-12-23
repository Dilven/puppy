import * as z from 'zod';

export const ItemSchema = z.object({
  Title: z.string(),
  Poster: z.string(),
  Type: z.union([z.literal('movie'), z.literal('series'), z.literal('episode')]),
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
