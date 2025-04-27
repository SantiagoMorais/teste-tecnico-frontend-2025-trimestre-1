import { Header } from "./components/header";
import { Toaster } from "./components/ui/sonner";

export const App = () => (
  <section className="flex min-h-screen max-w-(--breakpoint-2xl) flex-col items-center">
    <Header />
    <Toaster position="bottom-left" />
  </section>
);
