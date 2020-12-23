import { ApiSearchQuerySchema, ApiGetQuerySchema } from "../shared/schemas/api-query";

export const validateSearchQuery = (query: unknown) => ApiSearchQuerySchema.parse(query);
export const validateGetQuery = (id: unknown) => ApiGetQuerySchema.parse(id);