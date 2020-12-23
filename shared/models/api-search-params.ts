import * as z from 'zod';
import { ApiSearchQuerySchema, ApiGetQuerySchema } from '../schemas/api-query';

export type ApiSearchQuery = z.infer<typeof ApiSearchQuerySchema>; 
export type ApiGetQuery = z.infer<typeof ApiGetQuerySchema>; 
