import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    marginBottom: 20,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width: 200,
  },
  subtitle:{
    width: 200,
  }
  
}));

const TitleCategory = props => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3>What did you think about Hackathon?</h3>
      <span className={classes.subtitle}>Let us now express the importance of this hackathon, and others in your career.</span>   
    </div>
  )
}

export default TitleCategory;
