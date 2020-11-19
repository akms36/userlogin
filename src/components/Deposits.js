import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './DashTitle';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  style:{
    height:"0px"
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment className={classes.style}>
      <Title>Total Clients</Title>
      <Typography component="p" variant="h4">
       130
      </Typography>
      <PermIdentityIcon/>
      {/* <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
    </React.Fragment>
  );
}