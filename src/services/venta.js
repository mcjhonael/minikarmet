import { URL } from "../enviroments/enviroments";

export const getVentas = async () => {
  const response = await fetch(`${URL}/ventas`);
  const json = await response.json();
  return json;
};
