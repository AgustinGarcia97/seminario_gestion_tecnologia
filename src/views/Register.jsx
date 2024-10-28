import Grid from "@mui/material/Grid2";
import {Background} from "../components/Login/Background.jsx";
import {Logo} from "../components/Login/Logo.jsx";
import {LoginForm} from "../components/Login/LoginForm.jsx";
import {login_style} from "./Login.jsx";
import {RegisterForm} from "../components/Register/RegisterForm.jsx";

export const Register = () => {
    return(
        <Grid container sx={{...login_style.grid_container}}>
            <Grid item xs={12} sx={{width:'100%'}}>

            </Grid>
            <Grid
                item
                sx={{
                    ...login_style.grid_item,

                    width:{xs:'',md:'',lg:'',xl:'50%'},


                }}>
                <Background></Background>
            </Grid>
            <Grid
                item
                sx={{
                    ...login_style.grid_item,
                    ...login_style.grid_item2,
                    justifyContent:'center'


                }}>
                <RegisterForm></RegisterForm>
            </Grid>

        </Grid>

    )
}
