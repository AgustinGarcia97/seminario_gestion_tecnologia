import {Container, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Logo} from "../components/Login/Logo.jsx";
import {LoginForm} from "../components/Login/LoginForm.jsx";
import {Background} from "../components/Login/Background.jsx";
export const Login = () => {

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


                    }}>
                    <Logo/>
                    <LoginForm/>
                </Grid>

            </Grid>




    )
}

export const login_style = {
    container:{
        height:'auto',
        padding:1,
        backgroundColor:'rgb(229,228,228)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',

    },
    grid_container:{
        display:'flex',
        flexWrap:'wrap',
        width:'90%'

    },
    grid_item:{
        height:'90vh',
        backgroundColor:'#fff'

    },
    grid_item2:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width: {xs: '', md: '', lg: '', xl: '50%'},
        backgroundColor: '#fff',
        height:'90vh',

    }

}
