import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import authRequests from '../helpers/data/authRequests';
import AppNavbar from '../components/AppNavbar/AppNavbar';
// import Home from '../components/Home/Home';
import StudentDetail from '../components/StudentDetail/StudentDetail';
import Students from '../components/Students/Students';
import StudentEdit from '../components/StudentEdit/StudentEdit';
import StudentAdd from '../components/StudentAdd/StudentAdd';
import Instruments from '../components/Instruments/Instruments';
import Uniforms from '../components/Uniforms/Uniforms';
import Events from '../components/Events/Events';
import Volunteers from '../components/Volunteers/Volunteers';
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
    const { userObject, authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <AppNavbar />
            <div>
              <Switch>
              <PrivateRoute path='/student/:id' component={() => <StudentDetail userObject={userObject} />} authed={authed} />
              <PrivateRoute path='/studentedit/:id' component={() => <StudentEdit userObject={userObject} />} authed={authed} />
              <PrivateRoute path='/studentadd' component={() => <StudentAdd userObject={userObject} />} authed={authed} />
              <PrivateRoute path='/students' component={() => <Students userObject={userObject} />} authed={authed} />
              <PrivateRoute path='/instruments' component={() => <Instruments userObject={userObject} />} authed={authed} />
              <PrivateRoute path='/uniforms' component={() => <Uniforms userObject={userObject} />} authed={authed} />
              <PrivateRoute path='/events' component={() => <Events userObject={userObject} />} authed={authed} />
              <PrivateRoute path='/volunteers' component={() => <Volunteers userObject={userObject} />} authed={authed} />
              {/* <PrivateRoute path="/" component={() => <Home userObject={userObject} />} authed={authed} />
              <PrivateRoute path="/home" component={() => <Home userObject={userObject} />} authed={authed} /> */}
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
