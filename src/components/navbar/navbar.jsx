import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from './menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { IconButton } from '@mui/material';
import ShortMenu from './shortMenu';

const drawerWidth = 240;

const shortDrawerWidth = 80

export default function Navbar({ content }) {

    const [isBigMenu, setIsBigMenu] = useState(true)

    const changeMenu = () => {
        setIsBigMenu(!isBigMenu)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton onClick={changeMenu} sx={{ display: 'flex', color: 'white', marginRight: '40px' }}>
                        {isBigMenu ? <MenuOpenIcon /> : <MenuIcon />}
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Clipped drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: isBigMenu ? drawerWidth : shortDrawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: isBigMenu ? drawerWidth : shortDrawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                {isBigMenu ? <Menu /> : <ShortMenu />}
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {content}
            </Box>
        </Box>
    );
}
