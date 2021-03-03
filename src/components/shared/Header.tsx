import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">SHIORI</Link>
          </Typography>
          <Link to="/login">
            <Button color="inherit">LOGIN</Button>
          </Link>
          <Link to="/register">
            <Button color="inherit">SIGNUP</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
