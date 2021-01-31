import React, { useState } from 'react';

import { MenuItem, IconButton, Toolbar, AppBar, Drawer } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons';

import './Header.css';

export default function Header (props) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { timeTillTakeoff, timeToGate } = props;

    return (
        <AppBar color={'primary'} className={'header-div'} position={'static'}>
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
                                {/*<MenuItem className={'header-drawer-button'} href={'#'}>Home</MenuItem>*/}
                                {/*<MenuItem className={'header-drawer-button'} component={Link} to={'/aboutMe'}>About Me</MenuItem>*/}
                                {/*<MenuItem className={'header-drawer-button'} component={Link} to={'/qualifications'}>Qualifications</MenuItem>*/}
                                {/*<MenuItem className={'header-drawer-button'} component={Link} to={'/portfolio'}>Portfolio</MenuItem>*/}
                                {/*<MenuItem className={'header-drawer-button'} component={Link} to={'/service'}>Service</MenuItem>*/}
                                {/*<MenuItem className={'header-drawer-button'} component={Link} to={'/contact'}>Contact</MenuItem>*/}
                            </Drawer>
                        </>
                    }
                </div>
            </Toolbar>
        </AppBar>
    );
}