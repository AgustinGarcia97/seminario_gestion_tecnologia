import Grid from "@mui/material/Grid2";
import {login_style} from "../../views/Login.jsx";
import {Background} from "../Login/Background.jsx";
import {RegisterForm} from "./RegisterForm.jsx";
import {RegisterLastForm} from "./RegisterLastForm.jsx";


export const RegisterLastStep = () => {
    return(
        <Grid container sx={{...login_style.grid_container}}>
            <Grid item xs={12} sx={{width:'100%'}}>

            </Grid>
            <Grid
                item
                sx={{
                    ...login_style.grid_item,

                    width:{xs:'',md:'',lg:'',xl:'45%'},


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
                <RegisterLastForm></RegisterLastForm>
            </Grid>

        </Grid>

    )
}
