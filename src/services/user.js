import axios from "axios";

// URL base de la API
const API_URL = "http://localhost:8000"; // Cambia esta URL según tu backend

export const loginUser = async (username, password) => {
  try {
    // Crear los parámetros de formulario usando URLSearchParams
    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);

    // Realizar la solicitud POST con la cabecera de tipo formulario
    const response = await axios.post(`${API_URL}/login/`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    // Devuelve la respuesta del backend (access_token)
    return response.data;
  } catch (error) {
    console.error("Error de login:", error);
    throw error; // Lanzamos el error para que se maneje en el componente donde se llame
  }
};

export const createUser = async ({
  name,
  email,
  username,
  password,
  sector,
  actividad,
  rol,
  herramientas,
}) => {
  try {
    const response = await axios.post(`${API_URL}/users/`, {
      name: name,
      email: email,
      username: username,
      disabled: true,
      password: password,
      respuesta1: sector,
      respuesta2: actividad,
      respuesta3: rol,
      respuesta4: herramientas,
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error; // Lanza el error para que pueda manejarse donde se llame esta función
  }
};

export const getUser = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/login/users/me`, {
      headers: {
        Authorization: `Bearer ${username}`, // Send username as Bearer token
      },
    });
    return response.data; // Return user data
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    throw error; // Throw error to handle it in the component
  }
};
