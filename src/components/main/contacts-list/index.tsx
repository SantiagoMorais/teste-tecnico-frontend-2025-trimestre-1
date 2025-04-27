import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IContact } from "@/contexts/contacts-context/interfaces";

export const ContactsList = ({ contacts }: { contacts: IContact[] }) => (
  <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {contacts.map((contact) => (
      <Card key={contact.id} className="gap-2 p-4">
        <CardHeader className="p-0">
          <CardTitle className="truncate capitalize">
            {contact.username}
          </CardTitle>
          <CardDescription className="truncate first-letter:capitalize">
            {contact.displayName}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <p>
            <span className="font-semibold">CEP:</span> {contact.cep}
          </p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="line-clamp-2 w-full p-0 text-start">
                <span className="font-semibold">Endereço:</span>{" "}
                {contact.address}
              </TooltipTrigger>
              <TooltipContent>
                <p>{contact.address}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>
        <CardFooter className="mt-auto flex w-full flex-wrap gap-x-4 gap-y-2 p-0">
          <Button className="min-w-40 flex-1" variant="destructive">
            Deletar
          </Button>
          <Button className="min-w-40 flex-1">Editar</Button>
        </CardFooter>
      </Card>
    ))}
  </ul>
);
