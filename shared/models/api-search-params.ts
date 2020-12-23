import * as z from 'zod';
import { ApiSearchParamsSchema } from './../schemas/api-search-params';

export type ApiSearchParams = z.infer<typeof ApiSearchParamsSchema>; 
