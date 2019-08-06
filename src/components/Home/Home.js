import React from 'react';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="w-100 mx-auto">
      <div className="d-flex justify-content-center flex-wrap mt-5">
          <div className="card m-3 border-dark animated zoomIn" id="myGarage" onClick={this.changeView}>
              <div className="card-body home text-center">
              <h4 className="card-title"><i class="fas fa-user-friends fa-7x"></i></h4>
              <h5 className="card-subtitle mb-2 text-muted">Students</h5>
              </div>
          </div>
          <div className="card m-3 border-dark animated zoomIn" id='addMacine' onClick={this.toggleMachineModal}>
              <div className="card-body home text-center">
              <h4 className="card-title"></h4>
              <h5 className="card-subtitle mb-2 text-muted">Instruments</h5>
              </div>
          </div>
          <div className="card m-3 border-dark animated zoomIn" id='links' onClick={this.changeView}>
              <div className="card-body home text-center">
              <h4 className="card-title"><i class="fas fa-tshirt fa-7x"></i></h4>
              <h5 className="card-subtitle mb-2 text-muted">Uniforms</h5>
              </div>
          </div>
          <div className="card m-3 border-dark animated zoomIn" id='links' onClick={this.changeView}>
              <div className="card-body home text-center">
              <h4 className="card-title"><i class="fas fa-calendar-alt fa-7x"></i></h4>
              <h5 className="card-subtitle mb-2 text-muted">Events</h5>
              </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Home;
