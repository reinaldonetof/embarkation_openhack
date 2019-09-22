import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
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
import CompanyEvaluationSteps from './CompanyEvaluationSteps'
import FormExperience from './FormExperience'
import TitleCategory from './TitleCategory'
import ContainerCardCheckbox from './ContainerCardCheckbox'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CompanyEvaluation = props => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const [value, setValue] = React.useState(2);
  const classes = useStyles();

  const [hover, setHover] = React.useState(-1);
  const [hoverFood, setHoverFood] = React.useState(-1);

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

  const [values, setValues] = useState({
    Local: '',
    estructure: ''
  });

/*   const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
 */
  //panel step
  function isStepOptional(step) {
    return step === 1;
  }

  function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown step';
    }
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function handleNext() {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);

    function handleSkip() {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep(prevActiveStep => prevActiveStep + 1);
      setSkipped(prevSkipped => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    }
  }
  //--

  return (
    <div className={classes.root}>
      <CardHeader
      subheader="Participants of this Hackthon, please rate"
      title="HackThon: 1 Open Hack On Line"
    />
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange} aria-label="important categories">
        <Tab label="LOCAL" {...a11yProps(0)} />
        <Tab label="FOOD" {...a11yProps(1)} />
        <Tab label="EXPERIENCE" {...a11yProps(2)} />
        <Tab label="MENTORS" {...a11yProps(3)} />
        {/* <Tab label="PARTICIPANTS" {...a11yProps(3)} /> */}
      </Tabs>
    </AppBar>
      <TabPanel value={value} index={0}>
        <TitleCategory />
        <ContainerCardCheckbox />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TitleCategory />
        <CompanyEvaluationSteps />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TitleCategory />
        <FormExperience />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TitleCategory />
        <CompanyEvaluationSteps />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TitleCategory />
      </TabPanel>
    </div>
  );
}

CompanyEvaluation.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default CompanyEvaluation;
