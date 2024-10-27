import { Box } from "@mui/material";

export const Logo = () => {
    return (
        <Box sx={{ ...background_style.container }}>
            <Box
                component="img"
                src="./public/img/login/logo.png"
                alt="Logo"
                sx={{
                    height: '90%',
                    width: '90%',
                    objectFit: 'contain'
                }}
            />
        </Box>
    );
};

const background_style = {
    container: {
        height: '35vh',

        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};
