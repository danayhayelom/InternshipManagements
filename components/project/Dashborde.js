// Dashborde.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { Storedata } from './Storedata';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import './Navbar.css';

function Dashborde() {
    const [show, setShow] = useState(false);
    const showsidebar = () => setShow(!show);

    return (
        <>
            <IconContext.Provider value={{ color: '#ffffff' }}>
                <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={showsidebar}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            HIC Dashboard
                        </Typography>
                        <Button color="inherit" startIcon={<LogoutIcon />}>Logout</Button>
                    </Toolbar>
                </AppBar>

                <Drawer anchor="left" open={show} onClose={showsidebar}>
                    <List>
                        {Storedata.map((item, index) => (
                            <ListItem button key={index} onClick={showsidebar} component={NavLink} to={item.path}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </IconContext.Provider>
        </>
    );
}

export default Dashborde;
