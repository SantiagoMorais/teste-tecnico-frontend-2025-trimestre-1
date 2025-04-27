import { z } from "zod";

export const usernameAndDisplayNameSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Digite um nome de usuário válido" })
    .max(50, { message: "O nome de usuário deve ter no máximo 50 caracteres" }),
  displayName: z
    .string()
    .min(1, { message: "Digite um nome de exibição de endereço válido" })
    .max(50, {
      message:
        "O nome de exibição de endereço deve ter no máximo 50 caracteres",
    }),
});

export type TUpdateContactFormSchema = z.infer<
  typeof usernameAndDisplayNameSchema
>;
