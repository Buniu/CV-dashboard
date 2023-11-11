import Sidenav from '../components/Sidenav';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import Navbar from '../components/Navbar';

export const Home = () => {
    return (
        <>
            <Navbar />
            <Box height={63} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                    <Typography paragraph>Home1</Typography>
                    <Typography paragraph>Home2</Typography>
                    <Typography paragraph>Home3</Typography>
                    <Typography paragraph>Home4</Typography>
                    <Typography paragraph>Home5</Typography>
                </Box>
            </Box>
        </>
    );
};
