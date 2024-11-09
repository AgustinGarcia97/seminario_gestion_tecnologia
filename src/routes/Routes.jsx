import { Route, Routes } from "react-router-dom";
import { Home } from "../views/Home.jsx";

import { Login } from "../views/Login.jsx";
import { ChatOpia } from "../views/ChatOpia.jsx";
import { Recomendations } from "../views/Recomendations.jsx";
import { Progress } from "../views/Progress.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Register from "../views/Register.jsx";

export const ModuleRoutes = () => {
  return (
    <Routes>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />

      <Route element={<PrivateRoute />}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/OPIA"} element={<ChatOpia />} />
        <Route path={"/recomendations"} element={<Recomendations />} />
        <Route path={"/progress"} element={<Progress />} />
      </Route>
    </Routes>
  );
};
