import { useState, useRef } from "react";
import { RegisterForm } from "../components/Register/RegisterForm.jsx";
import { useNavigate } from "react-router-dom";
import { RegisterLastForm } from "../components/Register/RegisterLastForm.jsx";
import Grid from "@mui/material/Grid2";
import { login_style } from "./Login.jsx";
import { Background } from "../components/Login/Background.jsx";
import { createUser } from "../services/user.js";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const formData = useRef({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const goToNextStep = ({ name, email, username, password }) => {
    formData.current = { name, email, username, password };

    setStep((prevStep) => prevStep + 1);
  };

  const handleRegisterClick = async ({
    sector,
    actividad,
    rol,
    herramientas,
  }) => {
    const companyInfo = {
      sector,
      actividad,
      rol,
      herramientas,
    };

    const user = {
      name: formData.current.name,
      username: formData.current.username,
      email: formData.current.email,
      password: formData.current.password,
      ...companyInfo,
    };

    try {
      await createUser(user);
      console.log(user);
      alert("Usuario creado correctamente. Por favor, inicie sesión");
      navigate("/");
    } catch (error) {
      console.error("Error al crear el usuario", error);
    }
  };

  return (
    <Grid container sx={{ ...login_style.grid_container }}>
      <Grid item xs={12} sx={{ width: "100%" }}></Grid>
      <Grid
        item
        sx={{
          ...login_style.grid_item,

          width: { xs: "", md: "", lg: "", xl: "45%" },
        }}
      >
        <Background></Background>
      </Grid>
      <Grid
        item
        sx={{
          ...login_style.grid_item,
          ...login_style.grid_item2,
          justifyContent: "center",
        }}
      >
        <>
          {step === 1 && <RegisterForm goToNextStep={goToNextStep} />}
          {step === 2 && (
            <RegisterLastForm handleRegisterClick={handleRegisterClick} />
          )}
        </>
      </Grid>
    </Grid>
  );
};

export default Register;
