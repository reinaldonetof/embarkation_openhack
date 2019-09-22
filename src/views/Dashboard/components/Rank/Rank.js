import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
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
} from '@material-ui/core';

import axios from "axios";

import mockData from './data'
import logorank from '../../../../assets/rank/rank.png'

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 300,
    maxHeight: 253,
    minHeight: 253,
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
  imageAvatar: {
    height: 35,
    width: 35
  },
  headerCard: {
    height: 55,
    width: '100%',
    alignItems: 'center'
  }
}));


const NextHacks = props => {
  const { className, ...rest } = props
  const classes = useStyles()
  const [companies] = useState(mockData)
  const [typeRank, setTypeRank] = useState('global')
  const [rankGlobal, setRankGlobal] = useState([])

  

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        avatar={<img src={logorank} className={classes.imageAvatar} />}
        title={<h3>Ranking</h3>}
        className={classes.headerCard}
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table stickyHeader>
              <TableHead style={{height:20}}>
                <TableRow style={{height:20}}>
                  <TableCell>
                    <Button style={{height:25}} size="small" onClick={() => setTypeRank("global")}>
                      Rank Global
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button style={{height:25}} size="small" onClick={() => setTypeRank("friends")}>
                      Rank Amigo
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell><h5>NAME</h5></TableCell>
                <TableCell align="right"><h5>POINTS</h5></TableCell>
                {typeRank == "global"
                  ? companies.slice(0, 5).map(company => (
                      <TableRow hover key={company.idUser}>
                        <TableCell>{company.name}</TableCell>
                        <TableCell align="right">{company.pont}</TableCell>
                      </TableRow>
                    ))
                  : companies.slice(3, 5).map(company => (
                      <TableRow hover key={company.idUser}>
                        <TableCell>{company.name}</TableCell>
                        <TableCell align="right">{company.pont}</TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}></CardActions>
    </Card>
  );
};

NextHacks.propTypes = {
  className: PropTypes.string
};

export default NextHacks;
