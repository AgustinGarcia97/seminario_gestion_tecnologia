import {Container} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {Banner} from "../components/Home/banner/Banner.jsx";
import {Recomendations} from "../components/Home/recomendations/Recomendations.jsx";
import {Resources} from "../components/Home/resources/Resources.jsx";

export const Home = () => {
    return(

            <Grid container sx={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Grid item sx={{width:'100%'}}>
                    <Banner/>
                </Grid>
                <Grid item sx={{width:'100%',display:'flex', justifyContent:'center', alignItems:'center',  backgroundColor:'#fff'}}>
                    <Recomendations/>
                </Grid>
                <Grid item sx={{width:'100%'}}>
                    <Resources/>
                </Grid>
            </Grid>

    )
}
