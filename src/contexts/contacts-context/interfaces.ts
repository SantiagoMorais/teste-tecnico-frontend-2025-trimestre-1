export interface IContact {
  id: string;
  username: string;
  displayName: string;
  cep: string;
  address: string;
}

export interface IHandleContactContext {
  contacts: IContact[];
  registerContact: ({ contact }: { contact: IContact }) => void;
  updateContact: ({ contact }: { contact: IContact }) => void;
  deleteContact: ({ id }: { id: string }) => void;
}
