import React from "react";
import Post from "../PostView/Post/Post";
import classes from "./Home.module.css";

const home = props => {
  const description =
    "Heading back to India tomorrow after 3 years! So excited to explore Delhi, Agra and more for the next week! So much new content to come! in ALSO...! For those of you in Delhi I’m hosting a meet-up with @jordhammond at 2pm on 18th March at India Gate - can’t wait to see you there!";
  const description2 =
    "Heading back to India.\nTomorrow after 3 years! So excited to explore Delhi, Agra and more for the next week! So much new content to come! in ALSO...! For those of you in Delhi I’m hosting a meet-up with @jordhammond at 2pm on 18th March at India Gate - can’t wait to see you there!";

  return (
    <div className={classes.postsContainer}>
      <Post
        username="jacob"
        date="September 9, 2019"
        description={
          "Love being back in this crazy and beautiful city, New York, you are amazing ✨"
        }
      />
      <Post username="jacob" date="March 14, 2019" description={description2} />
      <Post username="jacob" date="March 14, 2019" description={description} />
    </div>
  );
};

export default home;
