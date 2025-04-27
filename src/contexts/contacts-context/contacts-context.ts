import { createContext } from "react";

import { IHandleContactContext } from "./interfaces";

export const ContactsContext = createContext<IHandleContactContext>({
  contacts: [],
  registerContact: () => {},
  updateContact: () => {},
  deleteContact: () => {},
});
