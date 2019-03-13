import React from 'react';
import Post from '../PostView/Post/Post';
import classes from './Home.module.css';

const home = props => {
    return (
        <div className={classes.postsContainer}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default home;