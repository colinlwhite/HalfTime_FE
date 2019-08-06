import React from 'react';
import { withRouter } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  changeView = (e) => {
    // current target goes straight to where the onClick function is
    const view = e.currentTarget.id;
    // const view = e.target.closest('.card').id;
    this.props.history.push(`/${view}`);
  }

  render() {
    return (
      <div className='Home mx-auto'>
      <div className="card-deck">
        <div className="card border-dark" id="instruments" onClick={this.changeView}>
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-comments fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">Instruments</h6>
          </div>
        </div>
        <div className="card border-dark" id='students' onClick={this.changeView}>
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-user-friends fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">Students</h6>
          </div>
        </div>
        <div className="card border-dark" id='uniforms' onClick={this.changeView}>
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-sun fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">Uniforms</h6>
          </div>
        </div>
      </div>
      <div className="card-deck">
        <div className="card border-dark" id='events' onClick={this.changeView}>
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-calendar-alt fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">Events</h6>
          </div>
        </div>
        <div className="card border-dark bg-warning">
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-tree fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">HalfTime</h6>
          </div>
        </div>
        <div className="card border-dark" id='volunteers' onClick={this.changeView}>
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-newspaper fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">Volunteers</h6>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default withRouter(Home);
