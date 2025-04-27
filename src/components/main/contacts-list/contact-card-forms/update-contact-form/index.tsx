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
import { IContact } from "@/contexts/contacts-context/interfaces";
import {
  TUpdateContactFormSchema,
  usernameAndDisplayNameSchema,
} from "@/core/types/update-contact-form-schema";

export const UpdateContactForm = ({
  contact,
}: {
  contact: Pick<IContact, "displayName" | "username" | "id">;
}) => {
  const { updateContact } = useContacts();
  const form = useForm<TUpdateContactFormSchema>({
    resolver: zodResolver(usernameAndDisplayNameSchema),
    defaultValues: {
      username: contact.username,
      displayName: contact.displayName,
    },
  });

  const onSubmit = async (data: TUpdateContactFormSchema) => {
    if (
      data.username === contact.username &&
      data.displayName === contact.displayName
    ) {
      toast.error("Nenhuma informação foi alterada.");
      return;
    }

    updateContact({
      id: contact.id,
      username: data.username,
      displayName: data.displayName,
      updatedAt: new Date().toISOString(),
    });

    toast.success("Contato atualizado com sucesso!");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full flex-col justify-between gap-4 px-4 pb-4"
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome de Usuário</FormLabel>
                <FormControl>
                  <Input placeholder="Nome de usuário" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="displayName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome de exibição de endereço</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Casa de Praia" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" variant="destructive" className="mt-auto w-full">
          Atualizar
        </Button>
      </form>
    </Form>
  );
};
