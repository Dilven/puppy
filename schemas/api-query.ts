import * as z from 'zod';

export const ApiSearchQuerySchema = z.object({
  name: z.string().nullable(),
  year: z.string().nullable(),
  plot: z.string().nullable(),
  page: z.string().nullable(),
})

export const ApiGetQuerySchema = z.object({ id: z.string()});