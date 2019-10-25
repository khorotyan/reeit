import React, { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import Comment from "./Comment/Comment";
import PostDescription from "./Description/PostDescription";
import Username from "../../Shared/Username/Username";
import PostLike from "./Like/PostLike";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";
import { IconButton, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteFilledIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkFilledIcon from "@material-ui/icons/Bookmark";
import classes from "./Post.module.css";

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
  };

  const addComment = text => {
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
    newComments.unshift(newComment);

    setCommentInputText("");
    setComments(newComments);
  };

  const handleAddCommentKeyPress = event => {
    if (event.key === "Enter") {
      let commentInputTextCopy = commentInputText;

      if (event.shiftKey) {
      } else {
        if (commentInputTextCopy.length > 0) {
          addComment(commentInputTextCopy);
        }
      }
    }
  };

  const handleCommentInputChange = event => {
    setCommentInputText(event.target.value.trimStart());
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: AVATAR_BACKGROUND_COLOR }}>
            JA
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={<Username name={props.username} />}
        subheader={props.date}
      ></CardHeader>
      <CardMedia
        className={classes.media}
        image="https://instagram.fevn1-4.fna.fbcdn.net/vp/bddf22f4addc8bb99f3cb7faff1b9b8c/5E646062/t51.2885-15/sh0.08/e35/p640x640/69891336_2096621027308477_3676285599008593739_n.jpg?_nc_ht=instagram.fevn1-4.fna.fbcdn.net&_nc_cat=101"
      />
      <CardActions style={{ paddingBottom: 0 }} disableActionSpacing>
        <IconButton onClick={handleLike} aria-label={liked ? "Unlike" : "Like"}>
          {liked ? (
            <FavoriteFilledIcon style={{ color: LIKE_FILLED_COLOR }} />
          ) : (
            <FavoriteIcon />
          )}
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton onClick={handleBookmark} style={{ marginLeft: "auto" }}>
          {bookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
        </IconButton>
      </CardActions>
      <CardContent style={{ paddingTop: 0 }}>
        <Typography style={{ paddingBottom: 6 }} component="p">
          <PostLike postId="13492" username="mpthecomebackid" likes="33168" />
        </Typography>
        <Typography
          style={{ paddingBottom: 12, whiteSpace: "pre-line" }}
          component="p"
        >
          <PostDescription description={props.description} />
        </Typography>
        {comments.map(comment => (
          <Comment text={comment.text} />
        ))}
        <BrowserRouter>
          <Link
            to={"/moreComments"}
            style={{ textDecoration: "none" }}
            className={classes.moreComments}
          >
            View more comments
          </Link>
        </BrowserRouter>
      </CardContent>
      <Divider light variant="middle" />
      <CardContent style={{ paddingTop: 8, paddingBottom: 8 }}>
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
