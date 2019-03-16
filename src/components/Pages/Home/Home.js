import React from 'react';
import Mention from '../PostView/Post/Mention/Mention';
import Post from '../PostView/Post/Post';
import classes from './Home.module.css';

const home = props => {

    const description = <React.Fragment>Heading back to India tomorrow after 3 years! So excited to explore Delhi, Agra and more for the next week! So much new content to come! in ALSO...! For those of you in Delhi I’m hosting a meet-up with <Mention username="jordhammond"/> at 2pm on 18th March at India Gate - can’t wait to see you there!</React.Fragment>

    return (
        <div className={classes.postsContainer}>
            <Post description={description}/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default home;