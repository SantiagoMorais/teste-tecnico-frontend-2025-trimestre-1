import { z } from "zod";

import { usernameAndDisplayNameSchema } from "./update-contact-form-schema";

export const contactAddressFormSchema = z.object({
  zipCode: z.coerce
    .string()
    .length(9, { message: "O CEP deve possuir 8 números" }),
  addressNumber: z.string().min(1, { message: "Escolha um valor válido" }),
  complement: z.coerce.string().optional(),
});

export const registerContactFormSchema = usernameAndDisplayNameSchema.merge(
  contactAddressFormSchema
);

export type TRegisterContactFormSchema = z.infer<
  typeof registerContactFormSchema
>;
