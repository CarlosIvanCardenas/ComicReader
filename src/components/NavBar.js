import React, {Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <Fragment>
            <AppBar position={"static"}>
                <Toolbar>
                    <Typography variant="h6" component={Link} to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                        Comics
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
};

export default NavBar;