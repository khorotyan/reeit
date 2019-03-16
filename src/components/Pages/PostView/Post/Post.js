import React, { useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import Comment from './Comment/Comment';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import { IconButton, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteFilledIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkFilledIcon from '@material-ui/icons/Bookmark';
import classes from './Post.module.css';

const AVATAR_BACKGROUND_COLOR = "#f44336";
const LIKE_FILLED_COLOR = "#e10050";

const post = props => {

    const [liked, setLike] = useState(false);
    const [bookmarked, setBookmark] = useState(false);
    const [commentInputText, setCommentInputText] = useState("");
    const [comments, setComments] = useState([]);

    const handleLike = () => {
        setLike(!liked);
    };

    const handleBookmark = () => {
        setBookmark(!bookmarked);
    }

    const addComment = (text) => {
        let id = 0;
        text = text.trim();

        if (comments.length !== 0) {
            id = comments[0].id + 1;
        }

        const newComment = {
            id: id,
            text: text
        };

        const newComments = [...comments];
        newComments.unshift(newComment)
        
        setCommentInputText("");
        setComments(newComments);
    } 

    const handleAddCommentKeyPress = event => {
        if (event.key === 'Enter') {
            let commentInputTextCopy = commentInputText;

            if (event.shiftKey) {

            } else {
                
                
                if (commentInputTextCopy.length > 0) {
                    addComment(commentInputTextCopy);
                } 
            }   
        }
    }

    const handleCommentInputChange = event => {
        setCommentInputText(event.target.value.trimStart());
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar style={{backgroundColor: AVATAR_BACKGROUND_COLOR}}>
                        VK
                    </Avatar>
                }
                action={
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                }
                title="Test User"
                subheader="March 14, 2019"
            >
            </CardHeader>
            <CardMedia
                className={classes.media}
                image="https://instagram.fevn1-1.fna.fbcdn.net/vp/8a77982ee081608b674889fe1cfe7edb/5D02176C/t51.2885-15/e35/53011206_366848223904033_748117012698865564_n.jpg?_nc_ht=instagram.fevn1-1.fna.fbcdn.net"
            />
            <CardActions style={{paddingBottom: 0}} disableActionSpacing>
                <IconButton onClick={handleLike} aria-label={liked ? "Unlike" : "Like"}>
                    {liked ? <FavoriteFilledIcon style={{color: LIKE_FILLED_COLOR}}/> : <FavoriteIcon/>}
                </IconButton>
                <IconButton aria-label="Share">
                    <ShareIcon/>
                </IconButton>
                <IconButton onClick={handleBookmark} style={{marginLeft: "auto"}}>
                    {bookmarked ? <BookmarkFilledIcon/> : <BookmarkIcon/>}
                </IconButton>
            </CardActions>
            <CardContent style={{paddingTop: 0}}>
                <Typography style={{paddingBottom: 6}} component="p">
                    Liked by <strong>James Brown</strong> and <strong>11,650 others</strong>
                </Typography>   
                <Typography style={{paddingBottom: 12}} component="p">
                    {props.description} 
                    <BrowserRouter>
                        <Link 
                            to={"/moreComments"}
                            style={{textDecoration: "none"}}
                            className={classes.expandDescription}
                        >
                            more
                        </Link>
                    </BrowserRouter>
                </Typography>
                {comments.map(comment => 
                    <Comment text={comment.text}/>    
                )}
                <BrowserRouter>
                    <Link 
                        to={"/moreComments"}
                        style={{textDecoration: "none"}}
                        className={classes.moreComments}
                    >
                        View more comments
                    </Link>
                </BrowserRouter>
            </CardContent>
            <Divider light variant="middle" />
            <CardContent style={{paddingTop: 8, paddingBottom: 8}}>
                <InputBase 
                    onChange={handleCommentInputChange}
                    onKeyPress={handleAddCommentKeyPress} 
                    className={classes.commentInput} 
                    placeholder="Add a comment..."
                    value={commentInputText}
                    multiline 
                />
            </CardContent>
        </Card>
    );
};

export default post;