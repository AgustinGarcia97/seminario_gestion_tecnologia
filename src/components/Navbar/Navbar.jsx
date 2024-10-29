
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Avatar, Button, IconButton, List, ListItem, Typography} from "@mui/material";
import React, {useState} from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from "react-router-dom";
import {LogoIcon} from "../../assets/icons/navbar/LogoIcon.jsx";

export const Navbar = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index, path) => {
        setActiveIndex(index);
        navigate(path);
    };

    return (

            <AppBar position="static" sx={{...navbar_style.container}}>
                <Toolbar sx={{...navbar_style.toolbar}}  style={{padding:0}} >
                  <Box sx={{...navbar_style.toolbar_container}}>
                      <Box sx={{display:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginLeft:2}}>
                          <LogoIcon/>
                          <Box sx={{...navbar_style.logo}}/>
                      </Box>
                      <List sx={{...navbar_style.list}}>
                          {navbar_item.map((item, index) => (
                              <ListItem key={index} sx={{...navbar_style.list_item,
                                  borderBottom: activeIndex === index ? '2px solid #4326a1' : '2px solid transparent',


                              }}   onClick={() => handleItemClick(index, item.path)}>

                                      <Typography sx={{...navbar_style.typography}}>{item.title}</Typography>


                              </ListItem>
                          ))}
                      </List>
                      <Box sx={{...navbar_style.login}}>
                          <IconButton  onClick={()=>{navigate('/login')}}>   <Avatar sx={{...navbar_style.avatar}}></Avatar></IconButton>

                          <Button sx={{textTransform:'none',fontSize:20,}} >
                              <Typography sx={{fontSize:17,  color:'#4326a1',}}>Salir</Typography>
                              <ArrowForwardIcon sx={{color:'#4326a1'}}></ArrowForwardIcon>
                          </Button>
                      </Box>
                  </Box>

                </Toolbar>
            </AppBar>

    );
}

const navbar_style = {
    container:{
        width:'100%',padding:0, backgroundColor:'#fff', boxShadow:'none',
        display:'flex',
        paddingBottom:2,
    },
    logo:{
        backgroundImage:`url('public/img/login/logo.png')`,
        height:50,
        width:100,
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        marginLeft:2,


    },
    toolbar:{

        height:90,
        width:'100%',
        display:'flex',
        alignItems:'center',



    },
    toolbar_container:{
        height:60,color:'black',padding:0,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        width:'100%',
        boxSizing:'border-box',

    },
    list:{
        display:'flex',
        width:'80%',
        justifyContent:'center',
        padding:0,
        gap:4,


    },
    list_item:{
        height:'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:0,
        width:'auto',


    },
    typography:{
        height:'100%',
        width:'100%',
        cursor:'pointer',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'#4326a1',
        textTransform:'none',




    },
    login:{
        display:'flex',
        marginLeft:'auto',
        marginRight:2,
        gap:1,

    }
}

const navbar_item = [
    {
        title:'Home',
        path:'/'
    },
    {
        title:'Chat OPIA',
        path:'/OPIA'
    },
    {
        title:'Recomendaciones',
        path:'/recomendations'
    },
    {
        title:'Progreso',
        path:'/progress'
    }

]
