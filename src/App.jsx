import {Navbar} from "./components/Navbar/Navbar.jsx";
import {login_style} from "./views/Login.jsx";
import {Title} from "./components/app/Title.jsx";
import {Container} from "@mui/material";
import {ModuleRoutes} from "./routes/Routes.jsx";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";


function App() {


  return (
      <BrowserRouter>
        <Container maxWidth={1} sx={{...login_style.container,flexDirection:'column',}} style={{padding:0}}>

            <Navbar></Navbar>
            <ModuleRoutes/>
        </Container>
          <Footer/>
      </BrowserRouter>
  )
}

export default App
