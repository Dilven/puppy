import * as z from 'zod';

import { ItemSchema, ItemPreviewSchema } from "../schemas/item";

export type Item = z.infer<typeof ItemSchema>; 
export type ItemPreview = z.infer<typeof ItemPreviewSchema>; 
export type ResourceType = Item['Type'];