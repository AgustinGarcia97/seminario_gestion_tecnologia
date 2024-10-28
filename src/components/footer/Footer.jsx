import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#de3030',
                color: '#333',
                padding: '20px',
                textAlign: 'center',
                borderTop: '1px solid #e0e0e0',
                marginTop: 'auto',
                width:'100%',
            }}
        >
            <Typography variant="body2" sx={{ fontSize: '14px', color: '#666' }}>
                © {new Date().getFullYear()} My Company. All rights reserved.
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
                <Link href="#" sx={{ color: '#666', textDecoration: 'none', mx: 1 }}>Privacy Policy</Link>
                <Link href="#" sx={{ color: '#666', textDecoration: 'none', mx: 1 }}>Terms of Service</Link>
                <Link href="#" sx={{ color: '#666', textDecoration: 'none', mx: 1 }}>Contact Us</Link>
            </Box>
        </Box>
    );
}
