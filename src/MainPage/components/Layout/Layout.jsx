import { Typography, Drawer, List, Paper } from '@mui/material';
import { MainContainer, Header, TestContent } from './Layout.styles';

import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Inbox, Mail } from '@mui/icons-material';

export const Layout = () => {
    return (
        <MainContainer>
            <Header>
                <TestContent> Header Content</TestContent>
            </Header>
            <Drawer variant='permanent'>
                <List>
                    {['Test1', 'Test2', 'Test3', 'Test4'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}>
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}>
                                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </MainContainer>
    );
};
