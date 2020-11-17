import { ItemSchema, ItemPreviewSchema } from "./item"
import * as z from 'zod';

export const EpisodeSchema = ItemSchema.extend({
  Type: z.literal('episode')
});

export const EpisodePreviewSchema = ItemPreviewSchema.extend({
  Type: z.literal('episode')
});
