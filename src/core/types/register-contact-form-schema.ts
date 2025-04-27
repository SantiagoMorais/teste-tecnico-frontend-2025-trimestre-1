import { z } from "zod";

export const registerContactFormSchema = z.object({
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
  zipCode: z.coerce
    .string()
    .length(9, { message: "O CEP deve possuir 8 números" }),
  addressNumber: z.string().min(1, { message: "Escolha um valor válido" }),
  complement: z.coerce.string().optional(),
});

export type TRegisterContactFormSchema = z.infer<
  typeof registerContactFormSchema
>;
