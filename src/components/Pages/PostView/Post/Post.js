import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
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
import ShareIcon from '@material-ui/icons/Share';
import SaveIcon from '@material-ui/icons/BookmarkBorder';
import classes from './Post.module.css';

const AVATAR_BACKGROUND_COLOR = "#f44336";

const post = props => {
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
                <IconButton aria-label="Like">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="Share">
                    <ShareIcon/>
                </IconButton>
                <IconButton style={{marginLeft: "auto"}}>
                    <SaveIcon/>
                </IconButton>
            </CardActions>
            <CardContent style={{paddingTop: 0}}>
                <Typography style={{paddingBottom: 6}} component="p">
                    Liked by <strong>James Brown</strong> and <strong>11,650 others</strong>
                </Typography>   
                <Typography style={{paddingBottom: 12}} component="p">
                    Heading back to India tomorrow after 3 years! So excited to explore Delhi, Agra and more for the next week! So much new content to come! in ALSO...! For those of you in Delhi I’m hosting a meet-up with <BrowserRouter><Link to="/user/:id" className={classes.userMention}>@jordhammond</Link></BrowserRouter> at 2pm on 18th March at India Gate - can’t wait to see you there!
                </Typography>
                <Comment text={"Simple one liner"}/>
                <Comment text={"A two liner with a lot of random random random random random random random random random random random random random random random random random random text"}/>
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
                <InputBase multiline className={classes.commentInput} placeholder="Add a comment..."/>
            </CardContent>
        </Card>
    );
};

export default post;