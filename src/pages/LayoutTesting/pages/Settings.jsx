import Sidenav from '../Sidenav';
import { Typography, Box } from '@mui/material';

export const Settings = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                    <Typography paragraph>Settings</Typography>
                </Box>
            </Box>
        </>
    );
};
