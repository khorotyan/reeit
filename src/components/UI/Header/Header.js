import React from 'react';
import classes from './Header.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { IconButton, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DiscoverPageIcon from '@material-ui/icons/Public';
import VotePageIcon from '@material-ui/icons/ThumbsUpDown';
import ProfilePageIcon from '@material-ui/icons/Person';

const WHITE_COLOR = "#ffffff";
const APP_BAR_BACKGROUND_COLOR = "#3f51b5";

const header = props => {
    return (
        <AppBar position="relative" style={{backgroundColor: APP_BAR_BACKGROUND_COLOR}}>
            <Toolbar>
                <div className={classes.logoRoot}>
                    <Button
                        style={{
                            color: WHITE_COLOR,
                            fontSize: 18,
                            textTransform: "none"
                        }}
                    >
                        Reeit
                    </Button>
                </div>
                <Paper className={classes.searchRoot} elevation={1}>
                    <IconButton className={classes.searchButton}>
                        <SearchIcon/>
                    </IconButton>
                    <InputBase 
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }} 
                        placeholder="Search..."    
                    />
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