import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import InputIcon from '@material-ui/icons/Input'
import Logo from '../../../../assets/logo/LOGO_SEMFUNDO_APLICATIVO.png'

import { Redirect } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width:40
  },
  logo: {
    height: 40,
    marginLeft: theme.spacing(4)
  }
}))

const Header = props => {
  const { className, onSidebarOpen, ...rest } = props
  const [logOut, setLogOut] = useState(false)
  const classes = useStyles()

  
  if(logOut) {
    localStorage.clear();
    return <Redirect to='/' />
  }
  
  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/init">
          <img
            alt="Logo"
            src={Logo}
            className={classes.logo}
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton
            onClick={() => { setLogOut(true) }}
            className={classes.signOutButton}
            color="inherit"
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
            className={classes.signOutButton}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
}

export default Header