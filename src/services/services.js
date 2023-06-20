import {URL} from "../enviroments/enviroments"

export const getCategorias = async () => {
  const response = await fetch(`${URL}/categorias`);
  const json = await response.json();
  return json;
};
