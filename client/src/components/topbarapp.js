import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import CircularProgress from '@material-ui/core/CircularProgress';
import AddIcon from '@material-ui/icons/Add';

export default function TopBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            PSL SCHEDULE
          </Typography>
          {props.showprogress && <CircularProgress />}
          {props.isAdmin && <IconButton disabled={props.disabled} color="inherit" onClick={props.add}>
            <AddIcon />
          </IconButton>}
          {!props.isAdmin && <Button disabled={props.disabled} color="inherit" onClick={props.login}>
            LOGIN
          </Button>}
          {props.isAdmin && <Button disabled={props.disabled} color="inherit" onClick={props.logout}>
            LOGOUT
          </Button>}

        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '2rem',
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    maxHeight: '65px',
    zIndex: 1000,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left'
  },
}));