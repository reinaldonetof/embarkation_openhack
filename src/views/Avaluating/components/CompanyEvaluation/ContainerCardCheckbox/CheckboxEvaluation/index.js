import React from 'react';
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


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

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

// export default function CheckboxEvaluation() {
const CompanyEvaluation = props => {
  const [value, setValue] = React.useState(2);
  const { className, ...rest } = props;
  const [hover, setHover] = React.useState(-1);
  const [hoverQuestTwo, setQuestTwo] = React.useState(-1);
  const [hoverQuestThree, setQuestThree] = React.useState(-1);
  const [hoverQuestFor, setQuestFor] = React.useState(-1);
  const [hoverQuestFive, setQuestFive] = React.useState(-1);
   const [hoverQuestSix, setQuestSix] = React.useState(-1);
  
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

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

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

    return (
      <div className="container">
        <div className="card">
          <Typography>Was the place comfortable?</Typography>
          <Paper className={classes.paper}>
            <Box component="fieldset" mb={2} borderColor="transparent">
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
          <Typography>Was the internet good?</Typography>
          <Paper className={classes.paper}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <div className={classes.rating1}>
                <Rating
                  name="hover-food"
                  value={value}
                  precision={0.5}
                  onChangeActive={(event, newQuestTwo) => {
                    setQuestTwo(newQuestTwo);
                  }}
                />
                <Box ml={2}>{labels[hoverQuestTwo !== -1 ? hoverQuestTwo : value]}</Box>
              </div>
            </Box>
          </Paper>
          <Typography>Were the chairs and tables sufficient for all participants?</Typography>
          <Paper className={classes.paper}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <div className={classes.rating1}>
                <Rating
                  name="hover-food"
                  value={value}
                  precision={0.5}
                  onChangeActive={(event, newQuestThree) => {
                    setQuestThree(newQuestThree);
                  }}
                />
                <Box ml={2}>{labels[hoverQuestThree !== -1 ? hoverQuestThree : value]}</Box>
              </div>
            </Box>
          </Paper>
          <Typography>Was the structure as expected?</Typography>
          <Paper className={classes.paper}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <div className={classes.rating1}>
                <Rating
                  name="hover-food"
                  value={value}
                  precision={0.5}
                  onChangeActive={(event, newQuestFor) => {
                    setQuestFor(newQuestFor);
                  }}
                />
                <Box ml={2}>{labels[hoverQuestFor !== -1 ? hoverQuestFor : value]}</Box>
              </div>
            </Box>
          </Paper>
          <Typography>The place was easily accessible - buses, handicapped, parking?</Typography>
          <Paper className={classes.paper}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <div className={classes.rating1}>
                <Rating
                  name="hover-food"
                  value={value}
                  precision={0.5}
                  onChangeActive={(event, newQuestFive) => {
                    setQuestFive(newQuestFive);
                  }}
                />
                <Box ml={2}>{labels[hoverQuestFive !== -1 ? hoverQuestFive : value]}</Box>
              </div>
            </Box>
          </Paper>
          <Typography> Did you feel safe on arrival?</Typography>
          <Paper className={classes.paper}>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <div className={classes.rating1}>
                <Rating
                  name="hover-food"
                  value={value}
                  precision={0.5}
                  onChangeActive={(event, newQuestSix) => {
                    setQuestSix(newQuestSix);
                  }}
                />
                <Box ml={2}>{labels[hoverQuestSix !== -1 ? hoverQuestSix : value]}</Box>
              </div>
            </Box>
          </Paper>
        </div>
      </div>
    )
  }

  export default CompanyEvaluation;
