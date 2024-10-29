import {List, ListItem, Typography} from "@mui/material";
import {sidebar_style} from "./SidebarToolbar.jsx";

export const SavedChats = () => {
    return(
        <>
            <List sx={{...sidebar_style.list}}>
                {[1,2,3,4,5,6].map((item,index) => (
                    <ListItem sx={{...sidebar_style.list_item}} key={index}>
                        <Typography sx={{...sidebar_style.typography}}>Primer tema</Typography>
                    </ListItem>
                ))}


            </List>
    </>
    )
}
