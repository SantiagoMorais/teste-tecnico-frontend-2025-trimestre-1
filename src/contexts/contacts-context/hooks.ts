import { useContext } from "react";

import { ContactsContext } from "./contacts-context";

export const useContacts = () => {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error("useContacts must be wrapped by a ContactsProvider");
  }
  return context;
};
