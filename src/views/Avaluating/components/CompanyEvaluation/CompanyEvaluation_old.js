import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  rating1: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
}));

const CompanyEvaluation = props => {
  const [value, setValue] = React.useState(2);
  const { className, ...rest } = props;
  const [hover, setHover] = React.useState(-1);
  const [hoverFood, setHoverFood] = React.useState(-1);
  const classes = useStyles();

  const labels = {
    1: 'Useless',
    2: 'Useless+',
    3: 'Poor',
    4: 'Poor+',
    5: 'Ok',
    6: 'Ok+',
    7: 'Good',
    8: 'Good+',
    9: 'Excellent',
    10: 'Excellent+',
  };

  return (
    <div className={classes.root}>
    <Card
    {...rest}
    className={clsx(classes.root, className)}
    >
    <form>
      <CardHeader
        subheader="Participants of this Hackthon, please rate"
        title="Avaluation the Company"
      />
      <Divider />
      <CardContent>

      <Typography component="legend">Categories</Typography>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Box component="fieldset" mb={2} borderColor="transparent">
              <Typography component="legend">Local</Typography>
              <div className={classes.rating1}>
                <Rating
                  name="hover-local"
                  value={value}
                  precision={0.5}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
              <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
              </div>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Food</Typography>
              <div className={classes.rating1}>
                <Rating
                  name="hover-food"
                  value={value}
                  precision={0.5}
                  onChangeActive={(event, newHoverFood) => {
                    setHoverFood(newHoverFood);
                  }}
                />
                <Box ml={2}>{labels[hoverFood !== -1 ? hoverFood : value]}</Box>
              </div>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          variant="outlined"
        >
          Save
        </Button>
      </CardActions>
    </form>
    </Card>
    </div>
  )
}

CompanyEvaluation.propTypes = {
  className: PropTypes.string
};

export default CompanyEvaluation;
