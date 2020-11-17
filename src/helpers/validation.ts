import { ResourceType } from "../models/item"
import { EpisodeSchema, EpisodePreviewSchema } from "../schemas/episode";
import { MovieSchema, MoviePreviewSchema } from "../schemas/movie";
import { SeriesSchema, SeriesPreviewSchema } from "../schemas/series";

const SearchSchemas = {
  movie: MovieSchema,
  series: SeriesSchema,
  episode: EpisodeSchema,
}

const PreviewSchemas = {
  movie: MoviePreviewSchema,
  series: SeriesPreviewSchema,
  episode: EpisodePreviewSchema,
}

type PreviewSchemasType = typeof PreviewSchemas;
type SearchSchemasType = typeof SearchSchemas;

type Schemas = PreviewSchemasType[keyof PreviewSchemasType] | SearchSchemasType[keyof SearchSchemasType]

export const validate = (schema: Schemas, item: unknown) => schema.parse(item);
export const validateSearch = (type: ResourceType, item: unknown) => validate(SearchSchemas[type], item)
export const validatePreview = (type: ResourceType, item: unknown) => validate(PreviewSchemas[type], item)