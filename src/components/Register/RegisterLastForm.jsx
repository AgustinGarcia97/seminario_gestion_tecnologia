import { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DomainIcon from "@mui/icons-material/Domain";
import BuildIcon from "@mui/icons-material/Build";

export const RegisterLastForm = ({ handleRegisterClick }) => {
  const navigate = useNavigate();
  const [sector, setSector] = useState("");
  const [actividad, setActividad] = useState("");
  const [rol, setRol] = useState("");
  const [herramientas, setHerramientas] = useState("");

  const handleClick = () => {
    handleRegisterClick({ sector, actividad, rol, herramientas });
  };

  return (
    <Grid container sx={{ ...register_form.container }}>
      <Grid item>
        <Box sx={{ ...register_form.typo_box }}>
          <Typography sx={{ fontSize: 35, fontWeight: "bold" }}>
            Último paso
          </Typography>
          <Typography sx={{ fontSize: 15 }}>
            Completa con la información de tu empresa
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box sx={{ ...register_form.grid_box }}>
          <TextField
            sx={{ ...register_form.textfield }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DomainIcon sx={{ fontSize: 25, color: "#a1a0a0" }} />
                </InputAdornment>
              ),
            }}
            id="sector"
            label="¿Cuál es el sector principal de tu empresa?"
            variant="outlined"
            placeholder="Ejemplo: tecnología, comercio, manufactura, etc."
            value={sector}
            onChange={(e) => setSector(e.target.value)}
          />
          <TextField
            sx={{ ...register_form.textfield }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BuildIcon sx={{ fontSize: 25, color: "#a1a0a0" }} />
                </InputAdornment>
              ),
            }}
            id="actividad"
            label="¿Cuál es la actividad principal que realiza tu empresa?"
            variant="outlined"
            placeholder="Ejemplo: desarrollo de software, ventas minoristas, producción de alimentos, etc."
            value={actividad}
            onChange={(e) => setActividad(e.target.value)}
          />
          <TextField
            sx={{ ...register_form.textfield }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BusinessCenterIcon sx={{ fontSize: 25, color: "#a1a0a0" }} />
                </InputAdornment>
              ),
            }}
            id="rol"
            label="¿Cuál es tu rol dentro de la empresa?"
            variant="outlined"
            placeholder="Ejemplo: gerente, administrativo, técnico, etc."
            value={rol}
            onChange={(e) => setRol(e.target.value)}
          />
          <TextField
            sx={{ ...register_form.textfield }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BuildIcon sx={{ fontSize: 25, color: "#a1a0a0" }} />
                </InputAdornment>
              ),
            }}
            id="herramientas"
            label="¿Qué herramientas o elementos son las más importantes para que puedas hacer tu trabajo?"
            variant="outlined"
            placeholder="Ejemplo: computadoras, software, maquinaria, bases de datos, etc."
            value={herramientas}
            onChange={(e) => setHerramientas(e.target.value)}
          />
        </Box>
      </Grid>
      <Grid
        item
        sx={{
          ...register_form.grid_item,
          flexDirection: "row",
          justifyContent: "end",
        }}
      >
        <Button
          sx={{
            textTransform: "none",
            backgroundColor: "#4D529B",
            color: "#fff",
            padding: 1.5,
          }}
          onClick={handleClick} // Llamamos a la función de handleFinish
        >
          <Typography>Finalizar</Typography>
        </Button>
      </Grid>
      <Divider />
      <Grid item>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: "bold",
              cursor: "pointer",
              color: "#0C2751",
              textTransform: "none",
            }}
          >
            Tengo una cuenta
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

const register_form = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  grid_item: {
    display: "flex",
    flexDirection: "column",
  },
  grid_box: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  typo_box: {
    color: "#0C2751",
  },
  textfield: {
    width: 550,
    textIndent: 10,
    borderRadius: 50,
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      "& input": {
        zIndex: 1,
      },
      "& fieldset": {
        borderColor: "transparent",
        backgroundColor: "#F2F4F7",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid",
        borderColor: "rgba(37,0,123,0.75)",
        backgroundColor: "transparent",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "rgba(37,0,123,0.75)",
      },
      "& label.Mui-focused": {
        color: "rgba(37,0,123,0.75)",
      },
    },
  },
};
