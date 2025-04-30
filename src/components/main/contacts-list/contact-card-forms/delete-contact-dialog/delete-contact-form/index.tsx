import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useContacts } from "@/contexts/contacts-context/hooks";
import {
  deleteContactSchema,
  deleteMessageConfirmation,
  TDeleteContactSchema,
} from "@/core/types/delete-contact-form-schema";

export const DeleteContactForm = ({
  id,
  username,
}: {
  id: string;
  username: string;
}) => {
  const { deleteContact } = useContacts();
  const form = useForm<TDeleteContactSchema>({
    resolver: zodResolver(deleteContactSchema({ contactName: username })),
    defaultValues: {
      typeConfirmation: "",
    },
  });

  const onSubmit = async (data: TDeleteContactSchema) => {
    console.log(data);

    deleteContact({ id });
    toast.success("Contato excluído com sucesso!");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full flex-col justify-between gap-4"
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="typeConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p className="w-full text-center text-lg">
                    Digite{" "}
                    <span className="text-destructive">
                      "{deleteMessageConfirmation({ contactName: username })}"
                    </span>{" "}
                    para confirmar exclusão
                  </p>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Digite a mensagem acima" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" variant="destructive" className="mt-auto w-full">
          Excluir
        </Button>
      </form>
    </Form>
  );
};
