import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	
	title: {
	  flexGrow: 1,
	},
  }));

export default function DisplayAppBar () {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Greeting App
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}
