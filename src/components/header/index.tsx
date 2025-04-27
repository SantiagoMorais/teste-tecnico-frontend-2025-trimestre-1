import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "../ui/button";
import { RegisterAddressForm } from "./register-address-form";

export const Header = () => (
  <header className="flex justify-center p-4">
    <Sheet>
      <SheetTrigger asChild>
        <Button>Registrar Endereço</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Registrar Endereço</SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo para registrar um novo endereço.
          </SheetDescription>
        </SheetHeader>
        <RegisterAddressForm />
      </SheetContent>
    </Sheet>
  </header>
);
