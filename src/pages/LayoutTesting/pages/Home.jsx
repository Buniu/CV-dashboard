import Sidenav from '../Sidenav';
import { Box, Paper } from '@mui/material';
import { Typography } from '@mui/material';

export const Home = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                    <Typography paragraph>Home</Typography>
                </Box>
            </Box>
        </>
    );
};
