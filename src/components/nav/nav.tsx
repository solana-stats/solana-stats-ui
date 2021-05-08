import React, {Dispatch, SetStateAction} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    toolbar: {
      maxWidth: 1200,
      width: "100%",
      margin: "0 auto",
    },
    themeToggle: {
      minWidth: 35,
      minHeight: 35,
      width: 35,
      height: 35,
      borderRadius: '50%',
    }
  }),
);

interface NavProps {
  themeToggle: Dispatch<SetStateAction<boolean>>,
  theme: boolean
}

export default function Nav(props: NavProps) {
  const classes = useStyles();

  return (
    <AppBar elevation={0} color={'transparent'} position={'static'}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          Solana Stats
        </Typography>
        <Button color={"primary"} className={classes.themeToggle} onClick={() => props.themeToggle(!props.theme)}>
          <Brightness4Icon/>
        </Button>
      </Toolbar>
    </AppBar>
  );

}