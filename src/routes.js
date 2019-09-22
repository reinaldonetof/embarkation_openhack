import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { isAuthenticated } from './services/auth'

import { RouteWithLayout } from './components';
import Welcome from './pages/Welcome'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Init from './pages/Init'
import LogOut from './pages/LogOut'
import {
  Dashboard as DashboardView,
  Companies as CompaniesView,
  Account as AccountView,
  Settings as SettingsView,
  UserList as UserListView,
  ProfileCompany as ProfileCompanyView,
  Avaluating as AvaluatingView
} from './views';

const RedirectToDash = () => {
return (
  <Redirect
    exact
    from='/init'
    to='/dashboard'
  />
)
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )
  )} />
)

const Dashboard = () => {
  return(
    <RouteWithLayout
        component={DashboardView}
        exact
        layout={Init}
        path="/dashboard"
      />
  )
};

const LatestHackas = () => {
  return(
    <RouteWithLayout
        component={CompaniesView}
        exact
        layout={Init}
        path='/latesthacka'
      />
  )
};

const Companies = () => {
  return(
    <RouteWithLayout
        component={ProfileCompanyView}
        exact
        layout={Init}
        path="/companies/:id"
      />
  )
};

const Hackas = () => {
  return (
    <RouteWithLayout
      component={AvaluatingView}
      exact
      layout={Init}
      path="/hacka/:id"
    />
  );
};

const Settings = () => {
  return (
    <RouteWithLayout
        component={SettingsView}
        exact
        layout={Init}
        path="/settings"
      />
  );
};

const ListUser = () => {
  return (
    <RouteWithLayout
        component={UserListView}
        exact
        layout={Init}
        path="/users"
      />
  );
};

const Account = () => {
  return (
    <RouteWithLayout
        component={AccountView}
        exact
        layout={Init}
        path="/account"
      />
  );
};

const PrivateDash = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )
  )} />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Welcome />} />
      <Route exact path="/signup" component={() => <SignUp />} />
      <Route exact path="/signin" component={() => <SignIn />} />
      <Route exact path="/logout" component={() => <LogOut />} />
      <PrivateRoute exact path="/init" component={() => <RedirectToDash />} />
      <PrivateDash component={() => <Dashboard />} exact path="/dashboard" />
      <PrivateDash
        component={() => <LatestHackas />}
        exact
        path="/latesthacka"
      />
      <PrivateDash
        component={() => <Companies />}
        exact
        path="/companies/:id"
      />
      <PrivateDash component={() => <Hackas />} exact path="/hacka/:id" />
      <PrivateDash component={() => <Settings />} exact path="/settings" />
      <PrivateDash component={() => <ListUser />} exact path="/users" />
      <PrivateDash component={() => <Account />} exact path="/account" />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes