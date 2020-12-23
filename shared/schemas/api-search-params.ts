import * as z from 'zod';

export const ApiSearchParamsSchema = z.object({
  name: z.string().nullable(),
  year: z.string().nullable(),
  plot: z.string().nullable(),
  page: z.string().nullable(),
  id: z.string().nullable(),
})