import React, { Component } from 'react';
import authRequests from '../helpers/data/authRequests';
import AppNavbar from '../components/AppNavbar/AppNavbar';
import './App.scss';

class App extends Component {
  state = {
    userObject: {},
  }

  componentDidMount() {
    authRequests.getUser()
      .then((user) => {
        console.log(user);
        this.setState({
          userObject: user,
        });
      })
      .catch(err => ('err'));
  }

  render() {
    //  const { userObject } = this.state;
    return (
      <div>
        <AppNavbar />

      </div>
    );
  }
}

export default App;
