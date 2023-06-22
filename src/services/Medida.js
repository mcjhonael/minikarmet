import { URL } from "../enviroments/enviroments";

export const getMedida = async () => {
  const response = await fetch(`${URL}/medidas`);
  const json = await response.json();
  return json;
};

export const postMedida = async (objMedida) => {
  const response = await fetch(`${URL}/medidas`, {
    method: "POST",
    body: JSON.stringify(objMedida),
    headers: { "Content-type": "application/json" },
  });
  const json = await response.json();
  return json;
};

export const putMedida = async (objMedida) => {
  const response = await fetch(`${URL}/medidas/${objMedida.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objMedida),
  });
  const json = await response.json();
  return json;
};


export const deleteMedida = async (id) => {
  const response = await fetch(`${URL}/medidas/${id}`, {method: "DELETE"});
  const json = await response.json();
  return json;
};
