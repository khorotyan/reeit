import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import Username from '../../../Shared/Username/Username';
import classes from './PostLike.module.css';

const postLike = props => {
    return (
        <React.Fragment>
            Liked by <Username name={props.username}/> and 
            <BrowserRouter>
                <Link to={"/posts/" + props.postId + "/likes"} className={classes.likes}>
                    <strong> {props.likes} others</strong>
                </Link>
            </BrowserRouter>   
        </React.Fragment>
    );
};

export default postLike;