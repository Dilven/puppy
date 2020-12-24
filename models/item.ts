import * as z from 'zod';

import { ItemSchema, ItemPreviewSchema } from '../schemas/item';

export type Item = z.infer<typeof ItemSchema>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ItemPreview = z.infer<typeof ItemPreviewSchema>;
export type ResourceType = Item['Type'];
