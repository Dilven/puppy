import * as z from 'zod';

export type Series = z.infer<typeof SeriesSchema>; 
export type SeriesPreview = z.infer<typeof SeriesPreviewSchema>; 
