import * as z from 'zod';
import Boom from '@hapi/boom';
import { EpisodeSchema, EpisodePreviewSchema } from '../schemas/episode';
import { MovieSchema, MoviePreviewSchema } from '../schemas/movie';
import { SeriesSchema, SeriesPreviewSchema } from '../schemas/series';
import { ApiSearchQuerySchema, ApiGetQuerySchema } from '../schemas/api-query';
import { ResourceType } from '../models/item';

const SearchSchemas = {
  movie: z.array(MovieSchema),
  series: z.array(SeriesSchema),
  episode: z.array(EpisodeSchema),
};

const PreviewSchemas = {
  movie: MoviePreviewSchema,
  series: SeriesPreviewSchema,
  episode: EpisodePreviewSchema,
};

export type PreviewSchemasType = typeof PreviewSchemas;
export type SearchSchemasType = typeof SearchSchemas;

type Schemas = PreviewSchemasType[keyof PreviewSchemasType] | SearchSchemasType[keyof SearchSchemasType]

const validate = <T extends Schemas>(schema: T, item: unknown): z.infer<T> => schema.parse(item);
export const validateSearch = <T extends ResourceType>(type: T, item: unknown) => validate(SearchSchemas[type], item);
export const validatePreview = <T extends ResourceType>(type: T, item: unknown) => validate(PreviewSchemas[type], item);

export const validateSearchQuery = (query: unknown) => {
  try {
    return ApiSearchQuerySchema.parse(query);
  } catch (e) {
    throw Boom.badRequest((e).message, e);
  }
};
export const validateGetQuery = (query: unknown) => {
  try {
    return ApiGetQuerySchema.parse(query);
  } catch (e) {
    throw Boom.badRequest((e).message, e);
  }
};
