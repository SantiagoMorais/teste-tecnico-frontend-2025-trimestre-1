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
  updateContact: ({
    displayName,
    id,
    username,
  }: {
    id: string;
    username: string;
    displayName: string;
  }) => void;
  deleteContact: ({ id }: { id: string }) => void;
}
