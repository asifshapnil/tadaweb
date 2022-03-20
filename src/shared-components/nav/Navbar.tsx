import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { NavDrawer } from './drawer';
import { Link, useNavigate } from 'react-router-dom';

import './Navbar.scss';

export const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='nav-wrapper'>
            <div className='container'>
                <div>
                    <Link className="font-normal" to="/">
                        <div className='title'>TadaWeb Expense Manager</div>
                    </Link>
                </div>
                <div>
                    <Button className='button' startIcon={<PersonIcon />} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Md Asif
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
}