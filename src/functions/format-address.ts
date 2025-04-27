import { IGetAddressByZipCode } from "@/core/interfaces/get-address-by-zip-code";

export const formatAddress = ({
  address,
  complement,
}: {
  address: Omit<IGetAddressByZipCode, "erro">;
  complement?: string;
}) => {
  const { bairro, localidade, logradouro, uf } = address;

  console.log(address);

  const formattedAddress = `${logradouro}, ${complement ? complement + ", " : ""}${bairro}, ${localidade} - ${uf}`;

  return formattedAddress;
};
