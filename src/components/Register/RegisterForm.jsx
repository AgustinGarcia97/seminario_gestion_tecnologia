import Grid from "@mui/material/Grid2";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/Key";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";

export const RegisterForm = ({ goToNextStep }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Estado para almacenar los valores de los inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNextClick = () => {
    const { name, email, username, password } = formData;
    goToNextStep({ name, email, username, password });
  };

  return (
    <Grid container sx={{ ...register_form.container }}>
      <Grid item></Grid>
      <Grid item>
        <Box sx={{ ...register_form.typo_box }}>
          <Typography sx={{ fontSize: 35, fontWeight: "bold" }}>
            Registrate
          </Typography>
          <Typography sx={{ fontSize: 15 }}>
            Completa con tu información
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
                  <PersonIcon sx={{ fontSize: 30, color: "#a1a0a0" }} />
                </InputAdornment>
              ),
            }}
            label="Nombre"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            sx={{ ...register_form.textfield }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ fontSize: 25, color: "#a1a0a0" }} />
                </InputAdornment>
              ),
            }}
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            sx={{ ...register_form.textfield }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ fontSize: 30, color: "#a1a0a0" }} />
                </InputAdornment>
              ),
            }}
            label="Username"
            variant="outlined"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <TextField
            sx={{ ...register_form.textfield }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon sx={{ fontSize: 25, color: "#a1a0a0" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={togglePasswordVisibility}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            label="Contraseña"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
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
          onClick={handleNextClick}
        >
          <Typography>Siguiente</Typography>
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
