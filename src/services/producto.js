import { URL } from "../enviroments/enviroments";

export const getProducto = async () => {
  const response = await fetch(`${URL}/productos`);
  const json = await response.json();
  return json;
};

export const postProducto = async (objProducto) => {
  const response = await fetch(`${URL}/productos`, {
    method: "POST",
    body: JSON.stringify(objProducto),
    headers: { "Content-type": "application/json" },
  });
  const json = await response.json();
  return json;
};

export const putProducto = async (objProducto) => {
  const response = await fetch(`${URL}/productos/${objProducto.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objProducto),
  });
  const json = await response.json();
  return json;
};

export const deleteProducto = async (id) => {
  const response = await fetch(`${URL}/productos/${id}`, { method: "DELETE" });
  const json = await response.json();
  return json;
};
