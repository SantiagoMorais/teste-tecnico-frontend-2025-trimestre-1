import { IGetAddressByZipCode } from "@/core/interfaces/get-address-by-zip-code";

export const formatAddress = ({
  address,
}: {
  address: Omit<IGetAddressByZipCode, "erro">;
}) => {
  const { bairro, complemento, localidade, logradouro, uf } = address;

  const formattedAddress = `${logradouro}, ${complemento ? complemento + ", " : ""}${bairro}, ${localidade} - ${uf}`;

  return formattedAddress;
};
