import * as z from 'zod';

const determinLength = (name: string, length: number) => ({
  check: (val: string) => val.length >= length,
  message: `${name} can't be less than ${length} characters`,
});

const passwordRefine = determinLength('password', 6);
const nameRefine = determinLength('name', 4);

export const signUpFormSchema = z
  .object({
    name: z.string().refine(nameRefine.check, nameRefine.message),
    password: z.string().refine(passwordRefine.check, passwordRefine.message),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  });

export type FormData = z.infer<typeof signUpFormSchema>;
