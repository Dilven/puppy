import { ItemSchema, ItemPreviewSchema } from "./item"
import * as z from 'zod';

export const MovieSchema = ItemSchema.extend({
  Type: z.literal('movie'),
});
export const MoviePreviewSchema = ItemPreviewSchema.extend({
  Type: z.literal('movie'),
});