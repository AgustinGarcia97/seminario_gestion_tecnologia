import {Box, IconButton} from "@mui/material";
import {toolbar_icons} from "../../assets/icons/chat/Icons.jsx";
import {login_style as sidebar_style} from "../../views/Login.jsx";

export const ToolbarChat = () => {
    return(
        <Box sx={{...toolbar_style.container}}>
            {toolbar_icons.map((Icon, index )=> (
                <IconButton key={index}>
                    <Icon />
                </IconButton>

            ))}
        </Box>
    )
}

const toolbar_style = {
    container:{
        display:'flex',
        width:'99%',
        marginTop:1,
        justifyContent:'end',
        gap:2,
        marginRight:5,
    }
}
