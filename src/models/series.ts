import * as z from 'zod';
import { SeriesPreviewSchema, SeriesSchema } from '../schemas/series';

export type Series = z.infer<typeof SeriesSchema>; 
export type SeriesPreview = z.infer<typeof SeriesPreviewSchema>; 
