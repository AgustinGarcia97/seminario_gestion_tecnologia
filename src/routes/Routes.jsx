
import {Route, Routes} from "react-router-dom";
import {Home} from "../views/Home.jsx";

import {Login} from "../views/Login.jsx";
import {Register} from "../views/Register.jsx";
import {RegisterLastStep} from "../components/Register/RegisterLastStep.jsx";
import {ChatOpia} from "../views/ChatOpia.jsx";
import {Recomendations} from "../views/Recomendations.jsx";
import {Progress} from "../views/Progress.jsx";

export const ModuleRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/next-step-register"} element={<RegisterLastStep/>}/>
            <Route path={"/OPIA"} element={<ChatOpia/>}/>
            <Route path={"/recomendations"} element={<Recomendations/>}/>
            <Route path={'/progress'} element={<Progress/>} />
        </Routes>
    )
}
