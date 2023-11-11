import Sidenav from '../components/Sidenav';
import { Typography, Box } from '@mui/material';
import Navbar from '../components/Navbar';

export const About = () => {
    return (
        <>
            <Navbar />
            <Box height={63} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                    <Typography paragraph>About</Typography>
                </Box>
            </Box>
        </>
    );
};
