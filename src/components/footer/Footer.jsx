import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#fff',
                paddingTop:2,
                paddingBottom:2,
                borderTop: '2px solid #e0e0e0',
                textAlign: 'center',
                width: '100%',
                height:60,
                display:'flex',
                flexDirection:'column',
                justifyContent: 'space-between',
                alignItems:'center',


            }}
        >
            <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} Optimus Pyme. Todos los derechos reservados.
            </Typography>
            <Box sx={{ marginTop: 1 }}>
                <Link href="#" color="inherit" underline="hover" sx={{ margin: '0 10px' }}>
                    Términos de Servicio
                </Link>
                <Link href="#" color="inherit" underline="hover" sx={{ margin: '0 10px' }}>
                    Política de Privacidad
                </Link>
                <Link href="#" color="inherit" underline="hover" sx={{ margin: '0 10px' }}>
                    Contacto
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;
