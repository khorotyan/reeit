import React from 'react';
import classes from './Header.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DiscoverPageIcon from '@material-ui/icons/Public';
import VotePageIcon from '@material-ui/icons/ThumbsUpDown';
import ProfilePageIcon from '@material-ui/icons/Person';

const WHITE_COLOR = "#ffffff";

const header = props => {
    return (
        <AppBar>
            <Toolbar>
                <Typography className={classes.logo} variant="h6" style={{color: WHITE_COLOR}}>
                    Reeit
                </Typography>
                <Paper className={classes.searchRoot} elevation={1}>
                    <InputBase 
                        className={classes.searchInput} 
                        placeholder="Search..."    
                    />
                    <IconButton className={classes.searchButton}>
                        <SearchIcon/>
                    </IconButton>
                </Paper>
                <div className={classes.grow}/>
                <div className={classes.sectionPageIcons}>
                    <IconButton>
                        <DiscoverPageIcon style={{color: WHITE_COLOR}}/>
                    </IconButton>
                    <IconButton>
                        <VotePageIcon style={{color: WHITE_COLOR}}/>
                    </IconButton>
                    <IconButton>
                        <ProfilePageIcon style={{color: WHITE_COLOR}}/>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default header;