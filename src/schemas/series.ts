import { ItemSchema, ItemPreviewSchema } from "./item"
import * as z from 'zod';

export const SeriesSchema = ItemSchema.extend({
  Type: z.literal('series')
});

export const SeriesPreviewSchema = ItemPreviewSchema.extend({
  Type: z.literal('series'),
  totalSeasons: z.string(),
});
