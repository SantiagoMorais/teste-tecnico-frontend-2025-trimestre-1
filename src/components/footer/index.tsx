import { Plus, X } from "lucide-react";

import { Button } from "../ui/button";

export const Footer = ({
  hasMore,
  onLoadMore,
}: {
  hasMore: boolean;
  onLoadMore: () => void;
}) => {
  const Icon = hasMore ? Plus : X;
  const label = hasMore ? "Carregar mais" : "Fim da lista";

  return (
    <footer className="fixed bottom-0 mt-auto flex w-full max-w-(--breakpoints-2xl) justify-center py-4">
      <Button
        disabled={!hasMore}
        onClick={onLoadMore}
        className="ring-background ring-4"
      >
        <Icon /> {label}
      </Button>
    </footer>
  );
};
