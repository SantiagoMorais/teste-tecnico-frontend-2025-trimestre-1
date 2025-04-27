import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
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
  registerContactFormSchema,
  TRegisterContactFormSchema,
} from "@/core/types/register-contact-form-schema";
import { formatAddress } from "@/functions/format-address";
import { getAddressByZipCode } from "@/functions/get-address-by-zip-code";
import { registerContactFormDefaultValues } from "@/utils/register-contact-form-default-values";

export const RegisterContactForm = () => {
  const { registerContact, contacts } = useContacts();
  const form = useForm<TRegisterContactFormSchema>({
    resolver: zodResolver(registerContactFormSchema),
    defaultValues: registerContactFormDefaultValues,
  });

  const onSubmit = async (data: TRegisterContactFormSchema) => {
    if (contacts?.find((contact) => contact.cep === data.zipCode)) {
      form.setError("zipCode", {
        type: "manual",
        message: "Esse CEP já está cadastrado.",
      });
      return;
    }

    const address = await getAddressByZipCode({ zipCode: data.zipCode });

    const formatedAddress = formatAddress({
      address,
      complement: data.complement,
    });

    registerContact({
      contact: {
        id: crypto.randomUUID(),
        username: data.username,
        displayName: data.displayName,
        cep: data.zipCode,
        address: formatedAddress,
      },
    });

    form.reset();
    toast.success("Contato cadastrado com sucesso!");
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
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CEP</FormLabel>
                <FormControl>
                  <PatternFormat
                    format="#####-###"
                    placeholder="Ex: 55555-555"
                    className={`"border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground focus-visible:border-ring focus-visible:ring-ring/50 md:text-sm" aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="addressNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: 123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="complement"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Complemento {"(Opcional)"}</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Ap 02" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" variant="destructive" className="mt-auto w-full">
          Enviar
        </Button>
      </form>
    </Form>
  );
};
