import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "../ui/button";
import { RegisterContactForm } from "./register-contact-form";

export const Header = () => (
  <header className="flex justify-center p-4">
    <Sheet>
      <SheetTrigger asChild>
        <Button>Registrar Contato</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Registrar Contato</SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo para registrar um novo endereço.
          </SheetDescription>
        </SheetHeader>
        <RegisterContactForm />
      </SheetContent>
    </Sheet>
  </header>
);
