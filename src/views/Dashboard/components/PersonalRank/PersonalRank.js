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
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  rootBar: {
    flexGrow: 1,
  },
  margin: {
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

const PersonalRank = props => {
  const [stateRank, setStateRank] = useState('avancado')

  const [nameRank, setNameRank] = useState('Newbie')
  const [imgRank, setImgRank] = useState(Newbie)
  const [colorBar, setColorBar] = useState('#0F0')
  const [valueBar, setValueBar] = useState(0)

  const { className, ...rest } = props;
  const classes = useStyles();

  useEffect(() => {
    setStateRank(props.valuerank)
  }, [props.valuerank])

  useEffect(() => {
    switch (stateRank) {
      case 'newbie':
        setNameRank('Newbie')
        setImgRank(Newbie)
        setColorBar('#0F0')
        setValueBar(20)
        break;
      case 'intermediate':
        setNameRank('Intermediate')
        setImgRank(Intermediate)
        setColorBar('rgb(167,196,77)')
        setValueBar(40)
        break;
      case 'advanced':
        setNameRank('Advanced')
        setImgRank(Advanced)
        setColorBar('rgb(255,201,73)')
        setValueBar(60)
        break;
      case 'expert':
        setNameRank('Expert')
        setImgRank(Expert)
        setColorBar('rgb(245,137,73)')
        setValueBar(80)
        break;
      case 'embassador':
        setNameRank('Embassador')
        setImgRank(Embassador)
        setColorBar('rgb(255,0,0)')
        setValueBar(100)
        break;
      default:
        console.log('erro')
    }
  }, [stateRank])

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h5"
            >
              RANK
            </Typography>
            <Typography variant="h3">{nameRank}</Typography>
          </Grid>
          <Grid item>
            <Avatar src={imgRank} className={classes.avatar}>
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <div className={classes.rootBar}>
            <BorderLinearProgress
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={valueBar}
              valuecolorbar={colorBar}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

PersonalRank.propTypes = {
  className: PropTypes.string
};

export default PersonalRank;
