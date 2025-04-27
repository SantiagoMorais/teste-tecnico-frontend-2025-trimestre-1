import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IContact } from "@/contexts/contacts-context/interfaces";

import { DeleteContactForm } from "./delete-contact-form";

export const DeleteContactDialog = ({
  contact,
}: {
  contact: Pick<IContact, "id" | "username">;
}) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="destructive" className="flex-1">
        Deletar
      </Button>
    </DialogTrigger>
    <DialogContent className="">
      <DialogHeader>
        <DialogTitle>
          Você tem certeza que deseja excluir os dados deste contato?
        </DialogTitle>
        <DialogDescription className="mb-2">
          Essa ação não pode ser desfeita e todos os dados deste cliente, como
          seus projetos cadastrados, serão perdidos.
        </DialogDescription>
      </DialogHeader>
      <DeleteContactForm id={contact.id} username={contact.username} />
    </DialogContent>
  </Dialog>
);
