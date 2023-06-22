import { URL } from "../enviroments/enviroments";

export const getCategorias = async () => {
  const response = await fetch(`${URL}/categorias`);
  const json = await response.json();
  return json;
};

export const postCategorias = async (objCategoria) => {
  const response = await fetch(`${URL}/categorias`, {
    method: "POST",
    body: JSON.stringify(objCategoria),
    headers: { "Content-type": "application/json" },
  });
  const json = await response.json();
  return json;
};

export const putCategoria = async (objCateg) => {
  const response = await fetch(`${URL}/categorias/${objCateg.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objCateg),
  });
  const json = await response.json();
  return json;
};


export const deleteCategorias = async (id) => {
  const response = await fetch(`${URL}/categorias/${id}`, {method: "DELETE"});
  const json = await response.json();
  return json;
};
