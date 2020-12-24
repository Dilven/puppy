import * as z from 'zod';

export const ApiSearchQuerySchema = z.object({
  name: z.string().optional(),
  year: z.string().optional(),
  plot: z.string().optional(),
  page: z.string().optional(),
})

export const ApiGetQuerySchema = z.object({ id: z.string()});