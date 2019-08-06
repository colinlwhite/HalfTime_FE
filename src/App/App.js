import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import authRequests from '../helpers/data/authRequests';
import AppNavbar from '../components/AppNavbar/AppNavbar';
import Home from '../components/Home/Home';
import StudentDetail from '../components/StudentDetail/StudentDetail';
import Students from '../components/Students/Students';
import StudentEdit from '../components/StudentEdit/StudentEdit';
import StudentAdd from '../components/StudentAdd/StudentAdd';
import InstrumentDetail from '../components/InstrumentDetail/InstrumentDetail';
import InstrumentEdit from '../components/InstrumentEdit/InstrumentEdit';
import InstrumentAdd from '../components/InstrumentAdd/InstrumentAdd';
import Instruments from '../components/Instruments/Instruments';
import UniformDetail from '../components/UniformDetail/UniformDetail';
import UniformEdit from '../components/UniformEdit/UniformEdit';
import UniformAdd from '../components/UniformAdd/UniformAdd';
import Uniforms from '../components/Uniforms/Uniforms';
import EventEdit from '../components/EventEdit/EventEdit';
import EventDetail from '../components/EventDetail/EventDetail';
import EventAdd from '../components/EventAdd/EventAdd';
import Events from '../components/Events/Events';
import VolunteerEdit from '../components/VolunteerEdit/VolunteerEdit';
import VolunteerDetail from '../components/VolunteerDetail/VolunteerDetail';
import VolunteerAdd from '../components/VolunteerAdd/VolunteerAdd';
import Volunteers from '../components/Volunteers/Volunteers';
import './App.scss';

class App extends React.Component {
  state = {
    userObject: {},
    authed: false,
  }

  componentDidMount() {
    authRequests.getUser()
      .then((user) => {
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
              <Route path='/home'
              component={() => <Home userObject={userObject} />} authed={authed} />
              <Route path='/' exact component={() => <Home userObject={userObject} />} authed={authed} />
              <Route path='/student/:id' component={() => <StudentDetail userObject={userObject} />} authed={authed} />
              <Route path='/studentedit/:id' component={() => <StudentEdit userObject={userObject} />} authed={authed} />
              <Route path='/studentadd' component={() => <StudentAdd userObject={userObject} />} authed={authed} />
              <Route path='/students' component={() => <Students userObject={userObject} />} authed={authed} />
              <Route path='/instrument/:id' component={() => <InstrumentDetail userObject={userObject} />} authed={authed} />
              <Route path='/instrumentedit/:id' component={() => <InstrumentEdit userObject={userObject} />} authed={authed} />
              <Route path='/instrumentadd' component={() => <InstrumentAdd userObject={userObject} />} authed={authed} />
              <Route path='/instruments' component={() => <Instruments userObject={userObject} />} authed={authed} />
              <Route path='/uniform/:id' component={() => <UniformDetail userObject={userObject} />} authed={authed} />
              <Route path='/uniformedit/:id' component={() => <UniformEdit userObject={userObject} />} authed={authed} />
              <Route path='/uniformadd' component={() => <UniformAdd userObject={userObject} />} authed={authed} />
              <Route path='/uniforms' component={() => <Uniforms userObject={userObject} />} authed={authed} />
              <Route path='/event/:id' component={() => <EventDetail userObject={userObject} />} authed={authed} />
              <Route path='/eventedit/:id' component={() => <EventEdit userObject={userObject} />} authed={authed} />
              <Route path='/eventadd' component={() => <EventAdd userObject={userObject} />} authed={authed} />
              <Route path='/events' component={() => <Events userObject={userObject} />} authed={authed} />
              <Route path='/volunteer/:id' component={() => <VolunteerDetail userObject={userObject} />} authed={authed} />
              <Route path='/volunteeredit/:id' component={() => <VolunteerEdit userObject={userObject} />} authed={authed} />
              <Route path='/volunteeradd' component={() => <VolunteerAdd userObject={userObject} />} authed={authed} />
              <Route path='/volunteers' component={() => <Volunteers userObject={userObject} />} authed={authed} />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
