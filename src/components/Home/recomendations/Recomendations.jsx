import {Box, Typography} from "@mui/material";
import { Chart, HomeIcons, PadLock, SecurityIcon } from "../../../assets/icons/home/Icons.jsx";

export const Recomendations = () => {
    return (
        <Box sx={{...recomendations_style.container}}>
            <Box sx={{...recomendations_style.title_container}}>
                <Typography sx={{...recomendations_style.title}}>Recomendaciones Recientes</Typography>
            </Box>
            <Box sx={{ ...recomendations_style.container_icons }}>

                {HomeIcons.map((item, index) => (
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                        gap:1,
                    }}>
                        <Box key={index} sx={{ ...recomendations_style.icon_container }}>
                            {item.icon}
                        </Box>
                        <Box sx={{height:100,display:'flex', alignItems:'start'}}>
                            <Typography
                                sx={{
                                    textAlign:'center',
                                    color:'rgba(37,0,123,0.75)',
                                    fontSize:13,
                                    padding:1,
                                    width:130,

                                }}
                            >{item.title}</Typography>
                        </Box>

                    </Box>

                ))}
            </Box>
        </Box>

    );
};

export const recomendations_style = {
    container:{
        width: '70%',
        marginTop:3,
        display:'flex',
        flexDirection: 'column',
        gap:3,
        backgroundColor:'#fff'
    },
    container_icons: {

        display: 'flex',

        justifyContent: 'space-between',
        alignItems: 'center',

    },
    title_container:{
      width:'100%',
      display: 'flex',
      justifyContent:'center',

    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:'#4326a1',
    },
    icon_container: {
        backgroundColor: '#e3d9ec',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        borderRadius: '50%',
        boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.3)',
        flexDirection: 'column',
        width: 60,
        height: 60,

    },
};
