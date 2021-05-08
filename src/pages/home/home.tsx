import React, {FormEvent, useState} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import {useHistory} from "react-router";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      alignItems: 'center',
      display: 'flex',
      height: 'calc(100vh - 64px)'
    },
    heroBlock: {
      display: 'block',
    },
    heroText: {
      marginBottom: 24,
    }
  }),
);

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const [address, setAddress] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    history.push(`/address/${address}`);
  }

  return (
    <div className={classes.hero}>
      <div className={classes.heroBlock}>
        <Typography className={classes.heroText}
                    variant={'h2'}>
          Navigate Solana at High Speed
        </Typography>
        <Typography className={classes.heroText}
                    variant={'h5'}
                    color={'textSecondary'}>
          Explore and Manage Solana Assets
        </Typography>
        <form noValidate autoComplete="off" onSubmit={submit}>
          <TextField value={address}
                     onInput={e => {setAddress((e.target as HTMLTextAreaElement).value)}}
                     label="Enter Solana Address"
                     type="search"
                     variant="outlined" />
        </form>
      </div>
    </div>
  );
}