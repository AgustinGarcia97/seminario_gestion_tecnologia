// Función para establecer el valor de "username" en sessionStorage
export const setUsername = (username) => {
  sessionStorage.setItem("username", username);

  const event = new Event("userChange");
  window.dispatchEvent(event);
};

// Función para obtener el valor de "username" de sessionStorage
export const getUsername = () => {
  return sessionStorage.getItem("username") || null;
};

// Función para eliminar el valor de "username" de sessionStorage
export const deleteUsername = () => {
  sessionStorage.removeItem("username");
};
