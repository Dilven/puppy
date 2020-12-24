import * as z from 'zod';
import { MovieSchema, MoviePreviewSchema } from '../schemas/movie';

export type Movie = z.infer<typeof MovieSchema>; 
export type MoviePreview = z.infer<typeof MoviePreviewSchema>; 