import {Box, Typography} from "@mui/material";
import {OpiaBanner} from "./OpiaBanner.jsx";

export const Banner = () => {
    return(
        <Box sx={{...banner_style.container}}>
            <Typography sx={{...banner_style.typography}} component="h1" variant="h5">Hola User</Typography>
            <OpiaBanner/>
        </Box>
    )
}

const banner_style = {
    container:{

        width:'100%',
        height:{xs:'',md:'',lg:'',xl:250},
        backgroundImage: `url('https://www.device42.com/blog/wp-content/uploads/2023/12/data-center-energy.webp')`,
        backgroundPosition:'center',
        display:'flex',
        backgroundColor:'blue',
        backgroundSize:'cover',
    },
    typography:{
        fontSize:50,
        fontWeight:'bold',
        color:'#117080',
        padding:3,
        textShadow: '1px 1px 2px #000',



    }

}
