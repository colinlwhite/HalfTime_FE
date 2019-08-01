import React, { Component } from 'react';
import authRequests from '../helpers/data/authRequests';
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
        <h1>HalfTime</h1>
      </div>
    );
  }
}

export default App;
