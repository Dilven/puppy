import * as z from 'zod';

export const ApiSearchParamsSchema = z.object({
  name: z.string().optional(),
  year: z.string().optional(),
  page: z.number(),
})