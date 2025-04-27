import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IContact } from "@/contexts/contacts-context/interfaces";

import { UpdateContactForm } from "./update-contact-form";

export const ContactCardForms = ({
  contact,
}: {
  contact: Pick<IContact, "id" | "displayName" | "username">;
}) => (
  <CardFooter className="mt-auto flex w-full flex-wrap gap-x-4 gap-y-2 p-0">
    <Button className="min-w-40 flex-1" variant="destructive">
      Deletar
    </Button>
    <Sheet>
      <SheetTrigger asChild>
        <Button className="min-w-40 flex-1">Editar</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Registrar Endereço</SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo para registrar um novo endereço.
          </SheetDescription>
        </SheetHeader>
        <UpdateContactForm contact={contact} />
      </SheetContent>
    </Sheet>
  </CardFooter>
);
