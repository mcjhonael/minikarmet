import { URL } from "../enviroments/enviroments";

export const getUsers = async () => {
  const response = await fetch(`${URL}/users`);
  const json = await response.json();
  return json;
};




export const postUsers = async (objUser) => {
  const response = await fetch(`${URL}/users`, {
    method: "POST",
    body: JSON.stringify(objUser),
    headers: { "Content-type": "application/json" },
  });
  const json = await response.json();
  return json;
};

export const putUsers = async (objUser) => {
  const response = await fetch(`${URL}/users/${objUser.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objUser),
  });
  const json = await response.json();
  return json;
};

export const deleteUsers = async (id) => {
  const response = await fetch(`${URL}/objUsers/${id}`, { method: "DELETE"});
  const json = await response.json();
  console.log(` mi json ${json}`);
  return json;
};
