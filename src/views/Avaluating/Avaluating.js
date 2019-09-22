import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import { CompanyEvaluation } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Avaluating = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>  
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <CompanyEvaluation />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Avaluating;
