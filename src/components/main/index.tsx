import { useContacts } from "@/contexts/contacts-context/hooks";

import { ContactsList } from "./contacts-list";

export const Main = () => {
  const { contacts } = useContacts();

  const content = () => {
    if (contacts.length > 0) return <ContactsList contacts={contacts} />;
    return <p className="text-center">Nenhum contato registrado.</p>;
  };

  return <main className="w-full max-w-(--breakpoint-2xl)">{content()}</main>;
};
