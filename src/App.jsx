import './App.css';
import { Layout } from './MainPage/components/Layout/Layout';
import { MyDrawer } from './MainPage/components/Layout/Drawer';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './shared/theme/theme.js';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Layout />
            </ThemeProvider>
        </>
    );
}

export default App;
