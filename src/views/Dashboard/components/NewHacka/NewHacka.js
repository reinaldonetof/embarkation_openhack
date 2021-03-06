import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom'
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Button
} from "@material-ui/core";
import { lighten, withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  content: {
    alignItems: "center",
    display: "flex"
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center"
  },
  gridAchiev: {
    marginTop: theme.spacing(2)
  },
  buttonHacka: {
    flex: 1,
    margin: 5,
    height: 30,
  },
}));

const NewHacka = props => {
  const [Participated, setParticipated] = useState(
    "1º Shawee Online Hackathon"
  )
  const [idHacka, setIdeHacka] = useState('421974')

  const [haveParticipated, setHaveParticipated] = useState('yes')

  const { className, ...rest } = props;
  const classes = useStyles();

  function handleAvaluating(id) {
    let path = `/hacka/${id}`
    props.history.push(path, {Participated})
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid
            container
            direction={"row"}
            justify="flex-start"
            alignItems="center"
          >
            <Typography
              className={classes.title}
              color="textSecondary"
              variant="h6"
              style={{ textAlign: "center" }}
            >
              Are you interested in promoting your hackathon on our platform?
            </Typography>
          </Grid>
          <Grid container className={classes.gridAchiev}>
                <Grid direction="row" container xs>
                  <Button
                    size="big"
                    variant="outlined"
                    className={classes.buttonHacka}
                    onClick={() => handleAvaluating(idHacka)}
                  >
                    Yes
                  </Button>
                </Grid>
              </Grid>
          
        </Grid>
      </CardContent>
    </Card>
  );
};

NewHacka.propTypes = {
  className: PropTypes.string
};

export default withRouter(NewHacka);
