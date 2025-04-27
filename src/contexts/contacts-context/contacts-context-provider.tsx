import { useState } from "react";

import { IUpdateContact } from "@/core/interfaces/update-contact";

import { ContactsContext } from "./contacts-context";
import { IContact } from "./interfaces";

export const ContactsProvider = ({ children }: React.PropsWithChildren) => {
  const [contacts, setContacts] = useState<IContact[]>(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  const registerContact = ({ contact }: { contact: IContact }) => {
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, contact];
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const updateContact = ({
    displayName,
    id,
    username,
    updatedAt,
  }: IUpdateContact) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.map((c) =>
        c.id === id ? { ...c, displayName, username, updatedAt } : c
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const deleteContact = ({ id }: { id: string }) => {
    setContacts((prevContacts) => {
      const contact = prevContacts.filter((c) => c.id !== id);
      localStorage.setItem("contacts", JSON.stringify(contact));
      return contact;
    });
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        registerContact,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
