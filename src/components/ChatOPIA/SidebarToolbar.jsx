import {Box, IconButton, List, ListItem, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {ExploreIcon, SettingsIcon, WriteIcon} from "../../assets/icons/home/Icons.jsx";
import {SavedChats} from "./SavedChats.jsx";

export const SidebarToolbar = () => {
    return(
        <Grid container sx={{...sidebar_style.container}}>
            <Grid item sx={{...sidebar_style.grid_item}}>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
                <IconButton>
                    <WriteIcon/>
                </IconButton>
            </Grid>
            <Grid item sx={{...sidebar_style.grid_item,marginLeft:1,}} >
                <Box sx={{display: "flex", gap:2, width:'100%'}}>
                    <ExploreIcon/>
                    <Typography sx={{...sidebar_style.typography}}>
                        Explorá los temas
                    </Typography>
                </Box>
            </Grid>
            <Grid item sx={{...sidebar_style.grid_item_last_chats}}>
                <SavedChats></SavedChats>
            </Grid>
        </Grid>
    )
}

export const sidebar_style = {
    container:{
        display:'flex',
        width:'80%',
        gap:2,
        boderSizing:'border-box',
        margin:2,

    },
    grid_item:{
        display:'flex',
        height:60,
        justifyContent:'space-between',
        alignItems:'center',
        width:"100%"

    },
    grid_item_last_chats:{
        display:'flex',
        flexDirection:'column',
        width:'100%'

    },
    list:{
        display:'flex',
        flexDirection:'column',
        marginLeft:1,
        gap:2,
        width:'100%'
    },
    list_item:{
        padding:1,
        width:'100%',
        borderRadius: 2,
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.09)',
        },
    },
    typography:{
        color:'#98A2B3'
    }
}

