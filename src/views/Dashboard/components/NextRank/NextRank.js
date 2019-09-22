import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'
import { lighten, withStyles, makeStyles } from '@material-ui/core/styles'
import TrendingFlat from '@material-ui/icons/TrendingFlat';


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
  gridAchiev: {
    marginTop: theme.spacing(2),
  }
}));

const NextRank = props => {
  const [stateRank, setStateRank] = useState('newbie')

  const [nextRank, setNextRank] = useState('Intermediate')
  const [achievementsToNext, setAchToNext] = useState('Participate more 1 Hackhathons; Be well rated by 10 people ')

  const { className, ...rest } = props;
  const classes = useStyles();

  
  useEffect(() => {
    console.log('LOGGGGG: '+ props.valuerank)
    setStateRank(props.valuerank)
  }, [props.valuerank])

  useEffect(() => {
    switch (stateRank) {
      case 'newbie':
        setNextRank('Intermediate')
        setAchToNext('Participate more 1 Hackhathons; be well rated by 10 people ')
        break;
      case 'intermediate':
        setNextRank('Advanced')
        setAchToNext('Participate more 2 Hackhathons; be well rated by 20 people ')
        break;
      case 'advanced':
        setNextRank('Expert')
        setAchToNext('Participate more 4 Hackhathons; be well rated by 35 people ')
        break;
      case 'expert':
        setNextRank('Embassador')
        setAchToNext('Participate more 3 Hackhathons; be well rated by 50 people; join a hackathon as a mentor  ')
        break;
      case 'embassador':
        setNextRank('WOW, you wnt More? :D')
        setAchToNext('Participate more and more Hackhathons; help the newbies and be happy; join a hackathon as a mentor  ')
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
          <Grid
            container
            direction={'row'}
            justify="flex-start"
            alignItems="center"
            
          >
            <Typography
              className={classes.title}
              color="textSecondary"
              variant="h6"
            >
              NEXT RANK
            </Typography>
            <TrendingFlat color="primary" />
            <Typography variant="h4">{nextRank}</Typography>
          </Grid>
          <Grid container className={classes.gridAchiev} >
            <Grid item xs >
              <Typography variant="h5">{achievementsToNext}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

NextRank.propTypes = {
  className: PropTypes.string
};

export default NextRank;
