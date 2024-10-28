import Grid from "@mui/material/Grid2";
import {Avatar, Box, Button, Divider, Typography} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";

export const LoginForm = () => {
    const navigate = useNavigate();
    return(
        <Grid container sx={{...login_form_style.container}}>

            <Grid item>
                <Box sx={{...login_form_style.box,flexDirection:'column', alignItems:'start',backgroundColor:'#fff'}}>
                    <Typography sx={{
                        fontWeight:'bold',
                        fontSize:{xs:'auto',md:'auto',lg:'auto',xl:30},
                        color:'#0C2751'
                    }}>Iniciar sesión</Typography>
                    <Typography sx={{
                        fontWeight:'600',
                        fontSize:{xs:'auto',md:'auto',lg:'auto',xl:15},
                        color:'#989696'
                    }}>Selecciona tu cuenta</Typography>
                </Box>

            </Grid>
            <Grid item>
                <Box sx={{...login_form_style.box,border:'2px solid #d7d7d7', borderRadius:2,}}>

                    <Box sx={{...login_form_style.box_user_data}} >
                        <Avatar/>
                        <Box sx={{display:"flex", justifyContent:'center', alignItems:'center',gap:{xs:0,md:0,lg:0,xl:0.5}}}>
                            <Typography sx={{color:'#aba9a9'}}>Bienvenido nuevamente</Typography>
                            <Typography sx={{color:'#575757', fontWeight:'bold'}}>User</Typography>
                        </Box>

                    </Box>
                    <Button variant="contained" color="secondary"
                            sx={{
                                ...login_form_style.login_button,
                                color:'#dc5454',
                                backgroundColor:'transparent',
                                fontWeight:'bold'
                    }}>Eliminar
                    </Button>
                </Box>
            </Grid>
            <Grid item>
                <Box sx={{...login_form_style.box,backgroundColor:'#fff', marginTop:5}}>
                    <Typography sx={{...login_form_style.font}}>Iniciar sesión con una cuenta diferente</Typography>
                    <Button variant="contained" color="secondary" sx={{...login_form_style.login_button, border:'none',}}
                            onClick={()=>{navigate('/')}}

                    >
                        <Typography>Acceder</Typography>
                        <NavigateNextIcon sx={{marginBottom:0.2}}/>
                    </Button>
                </Box>
            </Grid>
            <Divider sx={{width:'100%', backgroundColor: '#ececec',}}/>
            <Grid item>
                <Box sx={{...login_form_style.box, backgroundColor:'#fff'}}>
                    <Typography sx={{...login_form_style.font}}>No tenes una cuenta?</Typography>
                    <Button  color="secondary"
                             sx={{
                                ...login_form_style.login_button,
                                 color:'rgba(37,0,123,0.75)',
                                 backgroundColor:'transparent',
                                 fontWeight:'bold'
                    }}
                    onClick={()=>{navigate('/register')}}

                    >Registrate</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

const login_form_style = {
    container:{
        display:'flex',
        flexDirection:'column',
        width:{xs:'',md:'',lg:'',xl:'60%'},
        height: '60vh'

    },
    box:{
        display:'flex',
        width:'100%',
        justifyContent:'space-between',
        alignItems: 'center',
        boxSizing:'border-box',
        padding:3,
        backgroundColor: 'rgba(236,236,236,0.3)',


    },
    box_user_data:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        gap:1
    },
    login_button:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(63,31,136,0.75)',
        padding:0,
        width:{xs:'auto',md:'auto',xl:100},
        height:{xs:'auto',md:'auto',xl:45},
        textTransform:'none',
        fontSize:{xs:'',md:'',lg:'',xl:16},
        boxShadow:'none',
        borderRadius:2,
    },
    font:{
        color:'#475467',
        fontWeight:'bold',
        fontSize:15

    }
}
