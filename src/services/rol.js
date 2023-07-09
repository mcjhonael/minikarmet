import { URL } from "../enviroments/enviroments";

export const getRol = async () => {
  const response = await fetch(`${URL}/roles`);
  const json = await response.json();
  return json;
};

// export const postMarca = async (objMarca) => {
//   const response = await fetch(`${URL}/marcas`, {
//     method: "POST",
//     body: JSON.stringify({...objMarca,marca_id:+objMarca.marca_id}),
//     headers: { "Content-type": "application/json" },
//   });
//   const json = await response.json();
//   return json;
// };

// export const putMarca = async (objMarca) => {
//   const response = await fetch(`${URL}/marcas/${objMarca.id}`, {
//     method: "PUT",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(objMarca),
//   });
//   const json = await response.json();
//   return json;
// };


// export const deleteMarca = async (id) => {
//   const response = await fetch(`${URL}/marcas/${id}`, {method: "DELETE"});
//   const json = await response.json();
//   return json;
// };
