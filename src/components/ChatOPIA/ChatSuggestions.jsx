import Grid from "@mui/material/Grid2";
import { icons } from "../../assets/icons/chat/Icons.jsx";
import { Box, Typography } from "@mui/material";

export const ChatSuggestions = () => {
    return (
        <Grid container sx={{ ...chat_suggestions.grid }}>

            {icons.map((icon, index) => (
                <Grid
                    item
                    xs={12} sm={12} md={4}
                    key={index}
                    sx={{ ...chat_suggestions.container }}
                >
                    <Box sx={{ ...chat_suggestions.box }}>
                        <Box sx={{height:'20%', display:"flex",justifyContent:'center',alignItems:'center',}}>
                            {icon.icon}
                        </Box>

                        <Typography
                            sx={{
                                textAlign:'center',
                                fontSize:17,
                                color:'#98A2B3',
                                width:{xs: 'auto', md: 'auto', lg: 'auto', xl: '95%'},

                                height:'42%'
                        }}
                        >{icon.title}</Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

const chat_suggestions = {
    grid: {
        width: { xs: '100%', md: '70%', lg: '70%', xl: '65%' },
        display: 'flex',
        height: { xs: 'auto', md: 'auto', lg: 'auto', xl: 450 },
        justifyContent: 'center',
        alignItems: 'stretch',
       gap:2,


    },
    container: {
        display: 'flex',
        width: { xs: '100%', md: '100%', lg: '30%', xl: '25%' },
        backgroundColor: '#D9D9D91C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
        height: '60%',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.26)',
        },
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        height: '100%',
        width:{ xs: '100%', md: '100%', lg: '30%', xl: '90%' },
        gap:5,
        cursor:'pointer',

    },
};
