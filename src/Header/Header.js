import React, { useState } from 'react';

import { MenuItem, IconButton, Toolbar, AppBar, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import './Header.css';

export default function Header (props) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { timeTillTakeoff, timeToGate, getNextLoc } = props;

    const minLeft = Math.floor((timeTillTakeoff - timeToGate) / 60);

    let colorClass = "";
    if(minLeft <= 15) {
        colorClass = " yellow";
    }
    if(minLeft <= 5) {
        colorClass = " red";
    }

    return (
        <AppBar color={'primary'} className={'header-div' + colorClass} position={'static'}>
            <Toolbar>
                <div>
                    {
                        <>
                            <IconButton
                                color={'inherit'}
                                aria-label={'menu'}
                                aria-haspopup={'true'}
                                onClick={() => setDrawerOpen(!drawerOpen)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                className={'header-drawer'}
                                anchor={"left"}
                                open={drawerOpen}
                                onClose={() => setDrawerOpen(false)}
                            >
                                <MenuItem className={'header-drawer-button'} href={'#timer-div'} onClick={() => setDrawerOpen(false)}>
                                    Home
                                </MenuItem>
                                <MenuItem className={'header-drawer-button'} href={'#map-div'} onClick={() => setDrawerOpen(false)}>
                                    Map
                                </MenuItem>
                                <MenuItem className={'header-drawer-button'} href={'#options-div'} onClick={() => setDrawerOpen(false)}>
                                    Options
                                </MenuItem>
                                <MenuItem className={'header-drawer-button'} href={'#leaderboards-div'} onClick={() => setDrawerOpen(false)}>
                                    Leaderboards
                                </MenuItem>
                                <MenuItem className={'header-drawer-button'} href={'#leaderboards-div'} onClick={() => {
                                    getNextLoc();
                                    setDrawerOpen(false);
                                }}>
                                    Get Next Current Location
                                </MenuItem>
                            </Drawer>
                        </>
                    }
                </div>
            </Toolbar>
        </AppBar>
    );
}