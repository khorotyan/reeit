import React from 'react';
import { IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import classes from './Comment.module.css';

const comment = props => {
    return (
        <div className={classes.commentParent}>
            <div className={classes.commentTextRoot}>
                <Typography style={{paddingBottom: 8}} component="p">
                    <strong>zyuser</strong> {props.text}
                </Typography>
            </div>
            <div className={classes.likeRoot}>
                <IconButton className={classes.favoriteIconButton}>
                    <FavoriteIcon style={{width: 18, height: 18}}/>
                </IconButton>
            </div>
        </div>
    );
};

export default comment;