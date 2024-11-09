import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { OpiaBanner } from "./OpiaBanner.jsx";
import { getUser } from "../../../services/user.js";

export const Banner = () => {
  const [username, setUsername] = useState(null); // Estado para almacenar el nombre del usuario
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de la información
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Suponiendo que ya tienes el nombre de usuario almacenado en sessionStorage o alguna otra fuente
    const storedUsername = sessionStorage.getItem("username");

    if (storedUsername) {
      // Llamamos al servicio para obtener la información del usuario
      getUser(storedUsername)
        .then((userData) => {
          setUsername(userData.name); // Establecemos el nombre de usuario en el estado
          setLoading(false); // Terminamos la carga
        })
        .catch(() => {
          setError("No se pudo obtener la información del usuario");
          setLoading(false); // Terminamos la carga en caso de error
        });
    } else {
      setError("Usuario no encontrado");
      setLoading(false); // Terminamos la carga si no hay usuario
    }
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  if (loading) {
    return <Typography>Cargando...</Typography>; // Puedes mostrar un texto o un spinner mientras cargas la información
  }

  if (error) {
    return <Typography color="error">{error}</Typography>; // Muestra el error si ocurre alguno
  }

  return (
    <Box sx={{ ...banner_style.container }}>
      <Typography
        sx={{ ...banner_style.typography }}
        component="h1"
        variant="h5"
      >
        Hola {username} {/* Aquí mostramos el nombre de usuario */}
      </Typography>
      <OpiaBanner />
    </Box>
  );
};

const banner_style = {
  container: {
    width: "100%",
    height: { xs: "", md: "", lg: "", xl: 250 },
    backgroundImage: `url('https://www.device42.com/blog/wp-content/uploads/2023/12/data-center-energy.webp')`,
    backgroundPosition: "center",
    display: "flex",
    backgroundColor: "blue",
    backgroundSize: "cover",
  },
  typography: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#117080",
    padding: 3,
    textShadow: "1px 1px 2px #000",
  },
};
