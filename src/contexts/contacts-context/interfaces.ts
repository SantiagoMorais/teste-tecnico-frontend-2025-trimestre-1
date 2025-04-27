import { IUpdateContact } from "@/core/interfaces/update-contact";

export interface IContact {
  id: string;
  username: string;
  displayName: string;
  cep: string;
  address: string;
  createdAt: string;
  updatedAt?: string;
}

export interface IHandleContactContext {
  contacts: IContact[];
  registerContact: ({ contact }: { contact: IContact }) => void;
  updateContact: ({ displayName, id, username }: IUpdateContact) => void;
  deleteContact: ({ id }: { id: string }) => void;
}
