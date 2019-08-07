import React from 'react';
import { withRouter } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }

  render() {
    return (
      <div className='Home w-75 mx-auto'>
      <div className="card-deck">
        <div className="animated slideInLeft card border-dark mt-4" id="instruments" onClick={this.changeView}>
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-music fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2">Instruments</h6>
          </div>
        </div>
        <div className="animated slideInDown card border-dark mt-4" id='students' onClick={this.changeView}>
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-user-friends fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2">Students</h6>
          </div>
        </div>
        <div className="animated slideInRight card border-dark mt-4" id='uniforms' onClick={this.changeView}>
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-tshirt fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2">Uniforms</h6>
          </div>
        </div>
      </div>
      <div className="card-deck">
        <div className="animated slideInLeft card border-dark mt-4" id='events' onClick={this.changeView}>
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-calendar-alt fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2">Events</h6>
          </div>
        </div>
        <div className="animated slideInRight card border-dark mt-4" id='volunteers' onClick={this.changeView}>
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-users fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2">Volunteers</h6>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default withRouter(Home);
