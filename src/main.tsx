import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App.tsx";
import { ContactsProvider } from "./contexts/contacts-context/contacts-context-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContactsProvider>
      <App />
    </ContactsProvider>
  </StrictMode>
);
