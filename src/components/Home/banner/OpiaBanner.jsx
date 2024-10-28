import {Box, Typography} from "@mui/material";

export const OpiaBanner = () => {
    return(
        <Box sx={{...opia_banner_style.container}}>
            <Box sx={{...opia_banner_style.text_container}}>
                <Typography sx={{...opia_banner_style.text}} component="h1" variant="h5">Chateá</Typography>
                <Typography sx={{...opia_banner_style.text}}>con OPIA</Typography>
            </Box>

        </Box>
    )
}

const opia_banner_style = {
    container:{
        marginLeft:'auto',
        height:'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    text_container:{
        display:'flex',
        flexDirection:'column',
        width:{xs:'',md:'',lg:'',xl:200,},
        backgroundColor:'rgb(229,228,228)',
        height:{xs:'',md:'',lg:'',xl:'90%',},
        borderTopLeftRadius:'50%',
        borderBottomLeftRadius:'50%',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:{xs:'',md:'',lg:'',xl:30,},
        fontWeight:'bold',
        color:'#4326a1',
        textShadow: '1px 1px 2px #000',
    }

}
