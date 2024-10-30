import Grid from "@mui/material/Grid2";
import {ToolbarChat} from "../components/ChatOPIA/ToolbarChat.jsx";
import {SavedChats} from "../components/ChatOPIA/SavedChats.jsx";
import {SidebarToolbar} from "../components/ChatOPIA/SidebarToolbar.jsx";
import {ChatSuggestions} from "../components/ChatOPIA/ChatSuggestions.jsx";
import {InputChat} from "../components/ChatOPIA/InputChat.jsx";
import {Box, Typography} from "@mui/material";
import {Chat} from "../components/ChatOPIA/Chat.jsx";

export const ChatOpia = () => {
    return(
        <Grid container sx={{...chat_opia_style.container}}>
            <Grid item xs={4} sx={{...chat_opia_style.grid_item,backgroundColor:'#3D4857', width:{xs:'',md:'',lg:'',xl:'15vw'}}}>

                <SidebarToolbar/>

            </Grid>
            <Grid item xs={8} sx={{...chat_opia_style.grid_item,backgroundColor:'#444b59',width:{xs:'',md:'85vw',lg:'85vw',xl:'85vw'}}}>
                <ToolbarChat/>
                <Box
                    sx={{
                        minHeight:{xs:'',md:'',lg:'',xl:800},
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection:'column',
                        gap:2,

                    }}>

                    <Typography
                        sx={{
                            fontSize: {xs:'',md:'',lg:'',xl:20},
                            color:'#98A2B3',
                            padding:2,
                        }}>
                        Explorá los temas o comenzá a chatear con OPIA
                    </Typography>

                    <ChatSuggestions/>
                    <Chat/>
                    <InputChat/>
                </Box>

            </Grid>
        </Grid>
    )
}

const chat_opia_style = {
    container:{
        display:'flex',
        width:'100vw',
        minHeight:'90vh',
        justifyContent:'center',



    },
    grid_item:{

        display:'flex',
        flexDirection:'column',
        alignItems:'center',


    }

}
