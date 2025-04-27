import { useState } from "react";

import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Toaster } from "./components/ui/sonner";
import { useContacts } from "./contexts/contacts-context/hooks";

export const App = () => {
  const { contacts } = useContacts();
  const [visibleCount, setVisibleCount] = useState(10);

  const sortedContacts = [...contacts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const visibleContacts = sortedContacts.slice(0, visibleCount);
  const hasMore = visibleCount < contacts.length;

  return (
    <section className="flex min-h-screen flex-col items-center overflow-hidden p-4">
      <Header />
      <Main contacts={visibleContacts} />
      <Footer hasMore={hasMore} onLoadMore={loadMore} />
      <Toaster position="bottom-left" />
    </section>
  );
};
