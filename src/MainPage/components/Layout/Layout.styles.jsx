import { styled } from '@mui/system';
import { AppBar, Box, Typography } from '@mui/material';

export const MainContainer = styled(Box)(() => ({
    display: 'flex',
}));

export const Header = styled(AppBar)(({ theme }) => ({
    alignContent: 'space-evenly',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.grey[500],
}));

export const TestContent = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.light,
}));
