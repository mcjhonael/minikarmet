import { URL } from "../enviroments/enviroments";

export const getCompras = async () => {
  const response = await fetch(`${URL}/compras`);
  const json = await response.json();
  return json;
};
