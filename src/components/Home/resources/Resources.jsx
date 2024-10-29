import {Box, List, ListItem, Typography} from "@mui/material";

export const Resources = () => {
    return(
       <Box sx={{...resource_style.container}}>
           <Box sx={{...resource_style.banner}}>
               <Typography sx={{...resource_style.typo}}>Mejoras implemenadas Progreso</Typography>
           </Box>
           <Box sx={{...resource_style.chart}}>

           </Box>

               <Box sx={{...resource_style.options_data}}>
                   <Typography sx={{fontWeight:'bold'}}>Acceso directo a Mis Documentciones y Recursos</Typography>

                       <List sx={{...resource_style.list}}>
                           {
                               item_list.map((item,index) => (
                                   <ListItem key={index} sx={{...resource_style.list_item}}>
                                       <Typography >{item}</Typography>
                                   </ListItem>

                               ))
                           }
                       </List>

               </Box>

       </Box>
    )
}

const resource_style = {
    container:{
        display:'flex',
        width:'100%',
        backgroundColor:'white',
        alignItems:'center',
        height:{xs:'',md:'',lg:'',xl:400},
        color:'#4326a1',


    },
    banner:{
        backgroundColor:'rgb(229,228,228)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:{xs:'',md:'',lg:'',xl:120},
        borderBottomRightRadius:70,
        borderTopRightRadius:70,
        width:{xs:'',md:'',lg:'',xl:'10%'},
        marginRight:2,
    },
    typo:{
        textAlign:'center',
        fontSize:15,
        width:{xs:'',md:'',lg:'',xl:90},

    },

    chart:{
        backgroundImage: `url('https://www.rivialsecurity.com/hubfs/cybersecurity-trends-2019%202.jpg')`,
        backgroundPosition:'center',
        width:'30%',
        height:300,
        backgroundSize:'cover',
    },
    options_data:{
        backgroundColor:'rgb(229,228,228)',
        height:300,
        display:'flex',
        justifyContent:'center',
        marginLeft:20,
        flexDirection:'column',
        width:{xs:'',md:'',lg:'',xl:'49%'},
        boxSizing:'border-box',
        padding:5,
    },
    list:{
        display:'flex',
        flexDirection: 'column'
    },
    list_item:{

    }
}







const item_list = [
    "> Politicas de Seguirdad y Normativas",
    "> Recursos educativos sobre Ciberseguridad",
    "> Herramientas de Evaluación",
    "> Copias de Seguridad",
    "> Alertas y boletines de Seguridad",
]
