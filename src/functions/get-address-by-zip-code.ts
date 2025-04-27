import axios from "axios";
import { toast } from "sonner";

import { IGetAddressByZipCode } from "@/core/interfaces/get-address-by-zip-code";

export const getAddressByZipCode = async ({
  zipCode,
}: {
  zipCode: string;
}): Promise<IGetAddressByZipCode> => {
  const formatedZipCode = zipCode.replace(/-/g, ""); // Removes the dash from the zip code

  const response = await axios({
    method: "GET",
    url: `https://viacep.com.br/ws/${formatedZipCode}/json/`,
  });

  if (!response.data) {
    toast.error("Falha ao procurar endereço. Tente novamente mais tarde.");
    throw new Error("Falha ao procurar endereço.");
  }

  const data: IGetAddressByZipCode = response.data;

  if (data.erro) {
    toast.error("CEP inválido. Por favor, tente novamente.");
    throw new Error("CEP inválido.");
  }

  return data;
};
