import { ItemSchema, ItemPreviewSchema } from "./item"
import * as z from 'zod';

export const SeriesSchema = ItemSchema.extend({});

export const SeriesPreviewSchema = ItemPreviewSchema.extend({
  totalSeasons: z.string(),
});
