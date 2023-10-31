import './App.css';
import { Layout } from './pages/MainPage/components/Layout/Layout';
import { MyDrawer } from './pages/MainPage/components/Layout/Drawer';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './shared/theme/theme.js';
import Sidenav from './pages/LayoutTesting/Sidenav';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/LayoutTesting/pages/Home';
import { About } from './pages/LayoutTesting/pages/About';
import { Settings } from './pages/LayoutTesting/pages/Settings';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' exact element={<Home />} />
                        <Route path='/about' exact element={<About />} />
                        <Route path='/settings' exact element={<Settings />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
