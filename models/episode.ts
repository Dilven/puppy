import * as z from 'zod';
import { EpisodeSchema, EpisodePreviewSchema } from '../schemas/episode';

export type Episode = z.infer<typeof EpisodeSchema>;
export type EpisodePreview = z.infer<typeof EpisodePreviewSchema>;
