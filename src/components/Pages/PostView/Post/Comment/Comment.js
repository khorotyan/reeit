import React, { useState } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteFilledIcon from '@material-ui/icons/Favorite';
import { findMentions } from '../../../../../util/mentionFinder';
import Username from '../../../Shared/Username/Username';
import classes from './Comment.module.css';

const LIKE_FILLED_COLOR = "#e10050";

const comment = props => {

    const [liked, setLike] = useState(false);

    const handleLike = () => {
        setLike(liked => !liked);
    };

    return (
        <div className={classes.commentParent}>
            <div className={classes.commentTextRoot}>
                <Typography style={{paddingBottom: 8, whiteSpace: 'pre-line'}} component="p">
                    <Username name="zyuser "/>
                    {findMentions(props.text)}
                </Typography>
            </div>
            <div className={classes.likeRoot}>
                <IconButton onClick={handleLike} className={classes.favoriteIconButton}>
                    {liked 
                        ? <FavoriteFilledIcon style={{color: LIKE_FILLED_COLOR, width: 18, height: 18}}/> 
                        : <FavoriteIcon style={{width: 18, height: 18}}/>
                    }
                </IconButton>
            </div>
        </div>
    );
};

export default comment;