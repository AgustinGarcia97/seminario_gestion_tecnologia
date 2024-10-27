import {Box} from "@mui/material";

export const Background =  () => {
    return (
      <Box sx={{...backgroundStyle.image_box}}>

      </Box>
    )
}

const backgroundStyle = {

    image_box: {
        backgroundImage: `url('public/img/login/core_artwork.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:'100vh',
        width:'55%',



    },
}
