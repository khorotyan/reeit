import React from 'react';
import classes from './Username.module.css';
import { Link, BrowserRouter } from 'react-router-dom';

const username = props => {
    return (
        <BrowserRouter>
            <Link to={"/users/" + props.name} className={classes.username}>
                <strong>{props.name}</strong>
            </Link>
        </BrowserRouter>     
    );
};

export default username;