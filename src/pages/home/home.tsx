import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextLoop from "react-text-loop";
import Button from "@material-ui/core/Button";

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
    },
    heroLoop: {
      minWidth: 340
    },
    heroButton: {
      marginBottom: 24
    }
  }),
);

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <div className={classes.heroBlock}>
        <Typography className={classes.heroText}
                    variant={'h2'}>
          Explore Solana {' '}
          <TextLoop className={classes.heroLoop}
                    children={["Transactions", "DeFi", "Accounts", "Stables", "Fees", "Activity"]}
                    interval={1200}
                    springConfig={{ stiffness: 180, damping: 15 }}/>
        </Typography>
        <Typography className={classes.heroText}
                    variant={'h5'}
                    color={'textSecondary'}>
          Get unique metrics about the Solana Ecosystemgit 
        </Typography>
        <Button className={classes.heroButton}
                variant="contained"
                color="primary">
          Coming Soon
        </Button>
      </div>
    </div>
  );
}