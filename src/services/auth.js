import { URL } from "../enviroments/enviroments";

export const postLogin = async (dni, password) => {
    const response = await fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        dni: dni,
        password: password,
      }),
    });
    const json = await response.json();
    return json;
  };
  