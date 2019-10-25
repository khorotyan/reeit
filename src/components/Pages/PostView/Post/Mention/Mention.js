import React from 'react';
import classes from './Mention.module.css';
import { Link, BrowserRouter } from 'react-router-dom';

const mention = props => {
    const username = props.username[0] === '@' ? props.username : '@' + props.username;

    return (
        <BrowserRouter>
            <Link to={"/users/" + username.substr(1)} className={classes.userMention}>
                {username}
            </Link>
        </BrowserRouter>
    );
};

export default mention;