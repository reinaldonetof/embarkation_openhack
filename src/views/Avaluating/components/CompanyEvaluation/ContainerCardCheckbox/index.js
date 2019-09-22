import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CheckboxEvaluation from './CheckboxEvaluation';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    width: 475,
    borderRadius: 10,
    textAlign: 'right',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ContainerCardCheckbox() {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
       <CheckboxEvaluation />
      </CardContent>
      {/* fazer depois um if, para mostrar depois
      que tudo estiver selecionado */}
      <CardActions>
        <Button size="small">Save</Button>
      </CardActions>
    </Card>
  );
}