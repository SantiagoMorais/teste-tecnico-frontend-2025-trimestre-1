import { z } from "zod";

export const deleteMessageConfirmation = ({
  contactName,
}: {
  contactName: string;
}) => {
  return `Excluir ${contactName.slice(0, 50)}`;
};

export const deleteContactSchema = ({ contactName }: { contactName: string }) =>
  z.object({
    typeConfirmation: z
      .string()
      .refine(
        (value) =>
          value.toLowerCase() ===
          deleteMessageConfirmation({ contactName }).toLowerCase(),
        {
          message: "O texto digitado não coincide.",
        }
      ),
  });

export type TDeleteContactSchema = z.infer<
  ReturnType<typeof deleteContactSchema>
>;
