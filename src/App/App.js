import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import authRequests from '../helpers/data/authRequests';
import AppNavbar from '../components/AppNavbar/AppNavbar';
import './App.scss';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    userObject: {},
    authed: false,
  }

  componentDidMount() {
    authRequests.getUser()
      .then((user) => {
        console.log(user);
        this.setState({
          userObject: user,
          authed: true,
        });
      })
      .catch(err => ('err'));
  }

  componentWillUnmount() {
    this.setState({
      authed: false,
    });
  }

  render() {
    //  const { userObject } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <AppNavbar />
            <div>
              <Switch>
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
