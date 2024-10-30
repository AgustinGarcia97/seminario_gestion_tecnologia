import Grid from "@mui/material/Grid2";
import { HomeIcons } from "../assets/icons/home/Icons.jsx";
import { Box, Typography } from "@mui/material";
import { recomendations_style } from "../components/Home/recomendations/Recomendations.jsx";

export const Recomendations = () => {
    return (
        <Grid
            container
            spacing={1}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom:0,
                height: { xs: 'auto', md: 'auto', xl: '80vh' },
                backgroundColor: '#fff',
                width: '100%',
            }}
        >
            {HomeIcons.map((item, index) => (
                <Grid
                    item
                    key={index}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',

                        width: '100%',
                        backgroundColor: index % 2 !== 0 ? '#ffff' : 'rgb(229, 228, 228)',
                        minHeight: 100,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding:2,
                            alignItems: 'center',
                            width: '74%',
                            gap:4,

                        }}
                    >
                        <Box key={index} sx={{ ...recomendations_style.icon_container }}>
                            {item.icon}
                        </Box>
                        <Box sx={{display:"flex",flexDirection:'column',gap:2,}}>
                            <Typography sx={{color:'#4D529B',fontWeight:600}}>{item.title}</Typography>
                            <Typography sx={{color:'rgba(77,82,155,0.8)',fontWeight:300}}>{item.description}</Typography>
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}
