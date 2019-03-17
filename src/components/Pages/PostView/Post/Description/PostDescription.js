import React, { useState } from 'react';
import classes from './PostDescription.module.css';
import { Link, BrowserRouter } from 'react-router-dom';
import { findMentions } from '../../../../../util/mentionFinder';

const MAX_DESCRIPTION_LENGTH = 100;

const postDescription = props => {

    const [moreClicked, setMoreClicked] = useState(false);

    let shortDescription = props.description;

    const getDescription = () => {

        if (shortDescription.length <= MAX_DESCRIPTION_LENGTH || moreClicked) {
            return shortDescription;
        }

        // Trim to the max length
        shortDescription = shortDescription.substr(0, MAX_DESCRIPTION_LENGTH);

        // If there is a new line before reaching MAX_DESCRIPTION_LENGTH, cut description after it
        const newlineIndex = shortDescription.indexOf('\n');

        if (newlineIndex !== -1) {
            
        }

        // Trim again if we are in the middle of a word
        shortDescription = shortDescription.substr(0, Math.min(shortDescription.length, shortDescription.lastIndexOf(" ")));
        
        return shortDescription;
    };

    const showMore = () => {
        if (props.description.length <= MAX_DESCRIPTION_LENGTH || moreClicked){
            return false;
        }

        return true;
    }

    const handleMoreClick = () => {
        setMoreClicked(true);
    }

    return (
        <React.Fragment>
            {findMentions(getDescription())}
            { showMore() ? 
            <BrowserRouter>
                <Link 
                    onClick={handleMoreClick}
                    to={"/moreComments"}
                    style={{textDecoration: "none"}}
                    className={classes.more}
                >
                    more
                </Link>
            </BrowserRouter>
            : null}
        </React.Fragment>
    );
};

export default postDescription;