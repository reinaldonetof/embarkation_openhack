import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'
import { lighten, withStyles, makeStyles } from '@material-ui/core/styles'

import Newbie from '../../../../assets/niveis/iniciante.png'
import Intermediate from '../../../../assets/niveis/intermediario.png'
import Advanced from '../../../../assets/niveis/avancado.png'
import Expert from '../../../../assets/niveis/expert.png'
import Embassador from '../../../../assets/niveis/embaixador.png'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700,
    color: '#CCC'
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
    display: 'flex',
    alignItems: 'center'
  },
  rootBar: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1)
  },
  cardPerfil: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    margin: theme.spacing(1)
  }
}));

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#ccc', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: props => props.valuecolorbar,
  },
})(LinearProgress);

const Perfil = props => {
  const [stateRank, setStateRank] = useState("avancado");

  const [nameRank, setNameRank] = useState("Newbie");
  const [imgRank, setImgRank] = useState(Newbie);
  const [colorBar, setColorBar] = useState("#0F0");
  const [valueBar, setValueBar] = useState(0);

  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className, classes.cardPerfil)}
    >
      <CardContent className={classes.cardPerfil}>
        <Grid container justify='flex-start' className={classes.cardPerfil}>
          <Grid item className={classes.cardPerfil}>
            <Avatar src={imgRank} className={classes.avatar}></Avatar>
          </Grid>
          <Grid item className={classes.cardPerfil}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h2"
            >
              NOME DA EMPRESA
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Perfil.propTypes = {
  className: PropTypes.string
};

export default Perfil;
