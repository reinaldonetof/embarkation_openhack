import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import { lighten, withStyles, makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';

import Newbie from '../../../../assets/niveis/iniciante.png';
import Intermediate from '../../../../assets/niveis/intermediario.png';
import Advanced from '../../../../assets/niveis/avancado.png';
import Expert from '../../../../assets/niveis/expert.png';
import Embassador from '../../../../assets/niveis/embaixador.png';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
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
    marginTop: theme.spacing(0),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rootBar: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  },
  title: {
    fontWeight: 700,
    color: '#CCC',
    marginTop: theme.spacing(1)
  },
  cardPerfil: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    margin: theme.spacing(1),
    justifyContent: 'center',
  },
  starIcon: {
    color: '#FF0',
  },
  cardPerfilIcon: {
    background: '#000',
    height: theme.spacing(4),
    width: theme.spacing(4),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rating: {
    color: '#FF0',
    background: '#000',
    height: theme.spacing(4),
    width: theme.spacing(8),
    textAlign: 'center',
    borderRadius: 10
  }
}));

const PersonalRank = props => {
  const [stateRank, setStateRank] = useState('avancado');

  const [nameRank, setNameRank] = useState('Newbie');
  const [imgRank, setImgRank] = useState(Newbie);
  const [colorBar, setColorBar] = useState('#0F0');
  const [valueBar, setValueBar] = useState(0);

  const { className, ...rest } = props;
  const classes = useStyles();

  useEffect(() => {
    setStateRank(props.valuerank);
  }, [props.valuerank]);

  useEffect(() => {
    switch (stateRank) {
      case 'newbie':
        setNameRank('Newbie');
        setImgRank(Newbie);
        setColorBar('#0F0');
        setValueBar(20);
        break;
      case 'intermediate':
        setNameRank('Intermediate');
        setImgRank(Intermediate);
        setColorBar('rgb(167,196,77)');
        setValueBar(40);
        break;
      case 'advanced':
        setNameRank('Advanced');
        setImgRank(Advanced);
        setColorBar('rgb(255,201,73)');
        setValueBar(60);
        break;
      case 'expert':
        setNameRank('Expert');
        setImgRank(Expert);
        setColorBar('rgb(245,137,73)');
        setValueBar(80);
        break;
      case 'embassador':
        setNameRank('Embassador');
        setImgRank(Embassador);
        setColorBar('rgb(255,0,0)');
        setValueBar(100);
        break;
      default:
        console.log('erro');
    }
  }, [stateRank]);

  return (
    <Card {...rest} className={clsx(classes.root, className, classes.cardPerfil)}>
      <CardContent className={classes.cardPerfil}>
        <Grid container justify='flex-start' className={classes.cardPerfil}>
          <Grid container className={classes.cardPerfilIcon}>
            <StarIcon className={classes.starIcon}  />
          </Grid>
          <Grid item className={classes.cardPerfil}>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
              variant='h4'
            >
              RATING
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.difference}>
            <Typography variant='h3' className={classes.rating}>9/10</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

PersonalRank.propTypes = {
  className: PropTypes.string
};

export default PersonalRank;
