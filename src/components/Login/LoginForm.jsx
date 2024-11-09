import React, { useState, useEffect, useMemo } from "react";
import Grid from "@mui/material/Grid2";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Typography,
  TextField,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { getUsername, deleteUsername, setUsername } from "../../storage/user";
import { loginUser } from "../../services/user";
import { UserAvatar } from "../app/UserAvatar";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsernameInput] = useState("");
  const [password, setPasswordInput] = useState("");

  // Obtenemos el usuario desde el sessionStorage
  const user = useMemo(() => getUsername(), []);

  // Función para manejar el click de "Eliminar" o "Acceder"
  const handleLogoutOrAccess = () => {
    deleteUsername(); // Elimina el nombre de usuario del sessionStorage
    location.reload();
  };

  // Función para manejar el click en "Bienvenido nuevamente"
  const handleRedirectHome = () => {
    navigate("/"); // Redirige a la página principal
  };

  // Función para manejar el login
  const handleLoginClick = async () => {
    try {
      await loginUser(username, password);
      setUsername(username); // Guarda el nombre de usuario en sessionStorage
      navigate("/"); // Redirige a la página principal
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <Grid container sx={{ ...login_form_style.container }}>
      {!user ? (
        // Formulario de inicio de sesión si el usuario no está autenticado.
        <Grid item>
          <Box
            sx={{
              ...login_form_style.box,
              flexDirection: "column",
              alignItems: "start",
              backgroundColor: "#fff",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "auto", md: "auto", lg: "auto", xl: 30 },
                color: "#0C2751",
              }}
            >
              Iniciar sesión
            </Typography>

            <TextField
              label="Usuario"
              variant="outlined"
              fullWidth
              sx={{ mt: 2 }}
              onChange={(e) => setUsernameInput(e.target.value)}
            />
            <TextField
              label="Contraseña"
              type="password"
              variant="outlined"
              fullWidth
              sx={{ mt: 2 }}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, ...login_form_style.login_button, width: "140px" }}
              onClick={handleLoginClick}
            >
              Iniciar sesión
            </Button>
          </Box>
        </Grid>
      ) : (
        // Contenido de cuenta si el usuario está autenticado.
        <>
          <Grid item>
            <Box
              sx={{
                ...login_form_style.box,
                flexDirection: "column",
                alignItems: "start",
                backgroundColor: "#fff",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "auto", md: "auto", lg: "auto", xl: 30 },
                  color: "#0C2751",
                }}
              >
                Iniciar sesión
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: { xs: "auto", md: "auto", lg: "auto", xl: 15 },
                  color: "#989696",
                }}
              >
                Selecciona tu cuenta
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <Box
              sx={{
                ...login_form_style.box,
                border: "2px solid #d7d7d7",
                borderRadius: 2,
              }}
            >
              <Box sx={{ ...login_form_style.box_user_data }}>
                <UserAvatar />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xs: 0, md: 0, lg: 0, xl: 0.5 },
                  }}
                >
                  <Typography sx={{ color: "#aba9a9", textAlign: "center" }}>
                    Bienvenido nuevamente
                  </Typography>

                  <Typography
                    sx={{
                      color: "#575757",
                      fontWeight: "bold",
                    }}
                  >
                    {` ${user}`}
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                sx={{
                  ...login_form_style.login_button,
                  backgroundColor: "#4CAF50", // Gama de celeste
                  marginLeft: 2, // Para separarlo del botón "Eliminar"
                }}
                onClick={handleRedirectHome} // Llama a handleRedirectHome para redirigir al inicio
              >
                Acceder
              </Button>
            </Box>
          </Grid>

          <Grid item>
            <Box
              sx={{
                ...login_form_style.box,
                backgroundColor: "#fff",
                marginTop: 5,
              }}
            >
              <Typography sx={{ ...login_form_style.font }}>
                Iniciar sesión con una cuenta diferente
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{ ...login_form_style.login_button, border: "none" }}
                onClick={handleLogoutOrAccess} // Llama a deleteUsername y redirige al login
              >
                <Typography>Acceder</Typography>
                <NavigateNextIcon sx={{ marginBottom: 0.2 }} />
              </Button>
            </Box>
          </Grid>
        </>
      )}
      <Divider sx={{ width: "100%", backgroundColor: "#ececec" }} />
      <Grid item>
        <Box sx={{ ...login_form_style.box, backgroundColor: "#fff" }}>
          <Typography sx={{ ...login_form_style.font }}>
            No tienes una cuenta?
          </Typography>
          <Button
            color="secondary"
            sx={{
              ...login_form_style.login_button,
              color: "rgba(37,0,123,0.75)",
              backgroundColor: "transparent",
              fontWeight: "bold",
            }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Registrate
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

const login_form_style = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: { xs: "", md: "", lg: "", xl: "60%" },
    height: "60vh",
  },
  box: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    padding: 3,
    backgroundColor: "rgba(236,236,236,0.3)",
  },
  box_user_data: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
  },
  login_button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(63,31,136,0.75)",
    padding: "8px",
    width: { xs: "auto", md: "auto", xl: 100 },
    height: { xs: "auto", md: "auto", xl: 45 },
    textTransform: "none",
    fontSize: { xs: "", md: "", lg: "", xl: 16 },
    boxShadow: "none",
    borderRadius: 2,
  },
  font: {
    color: "#475467",
    fontWeight: "bold",
    fontSize: 15,
  },
};
