import { Plus, X } from "lucide-react";

import { Button } from "../ui/button";

export const Footer = ({
  hasMore,
  onLoadMore,
}: {
  hasMore: boolean;
  onLoadMore: () => void;
}) => {
  const content = () => {
    if (hasMore)
      return (
        <>
          <Plus /> Carregar mais
        </>
      );

    return (
      <>
        <X /> Fim da lista
      </>
    );
  };

  return (
    <footer className="fixed bottom-0 mt-auto flex w-full max-w-(--breakpoints-2xl) justify-center py-4">
      <Button
        disabled={!hasMore}
        onClick={onLoadMore}
        className="ring-background ring-4"
      >
        {content()}
      </Button>
    </footer>
  );
};
