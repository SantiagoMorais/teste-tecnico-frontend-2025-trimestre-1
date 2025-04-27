import { Header } from "./components/header";
import { Main } from "./components/main";
import { Toaster } from "./components/ui/sonner";

export const App = () => (
  <section className="flex min-h-screen flex-col items-center overflow-hidden p-4">
    <Header />
    <Main />
    <Toaster position="bottom-left" />
  </section>
);
