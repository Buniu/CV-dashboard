import { styled } from '@mui/system';
import { Toolbar, Paper } from '@mui/material';

export const HeaderContainer = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
}));

export const Header = styled(Toolbar)(({ theme }) => ({
    alignContent: 'space-evenly',
    padding: theme.spacing(1),
}));
