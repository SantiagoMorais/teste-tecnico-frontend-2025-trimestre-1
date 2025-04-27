import { IContact } from "@/contexts/contacts-context/interfaces";

import { ContactsList } from "./contacts-list";

export const Main = ({ contacts }: { contacts: IContact[] }) => {
  const content = () => {
    if (contacts.length > 0) return <ContactsList contacts={contacts} />;
    return <p className="text-center">Nenhum contato registrado.</p>;
  };

  return <main className="w-full max-w-(--breakpoint-2xl)">{content()}</main>;
};
