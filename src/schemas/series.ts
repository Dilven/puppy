import { ItemSchema, ItemPreviewSchema } from "./item"

export const SeriesSchema = ItemSchema.extend({});

export const SeriesPreviewSchema = ItemPreviewSchema.extend({
  totalSeasons: z.string(),
});