import { Button, Box } from '@mui/material';
import { HeaderContainer, Header } from './Layout.styles';

export const Layout = () => {
    return (
        <Box>
            <HeaderContainer elevation={0}>
                <Header>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                </Header>
            </HeaderContainer>
        </Box>
    );
};
