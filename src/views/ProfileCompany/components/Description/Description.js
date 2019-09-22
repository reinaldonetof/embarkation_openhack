import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  ButtonGroup,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel,
} from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'

import mockData from './data'

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 300,
    minHeight: 255,
    maxHeight: 255
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  buttonOutlined: {
    margin: 0,
    height: 30,
    width: 100
  },
  buttonGroup: {
    height: 30
  },
}))


const Description = props => {
  const { className, ...rest } = props

  const classes = useStyles()

  const [companies] = useState(mockData)

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className, classes.description)}
    >
      <CardHeader title="Description" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}></div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}></CardActions>
    </Card>
  );
}

Description.propTypes = {
  className: PropTypes.string
}

export default withRouter(Description)
