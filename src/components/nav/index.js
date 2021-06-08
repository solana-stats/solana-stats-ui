import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            flexGrow: 1,
            fontFamily: 'inter',
            letterSpacing: 5,
            marginLeft: 12,
            textDecoration: 'none',
            color: 'white !important'
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
        },
        logo: {
            maxHeight: 64
        }
    }),
);

export default function Nav() {
    const classes = useStyles();

    return (
        <AppBar elevation={0} color={'transparent'} position={'static'}>
            <Toolbar className={classes.toolbar}>
                <img className={classes.logo} alt={'Solana Stats Logo'} src={logo}/>
                <Link className={classes.title} to={'/'}>
                    <Typography variant="h6" className={classes.title}>
                        Solana Stats
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}