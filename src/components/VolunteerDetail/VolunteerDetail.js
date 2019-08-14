import React from 'react';
import { withRouter } from 'react-router-dom';
import volunteerRequests from '../../helpers/data/volunteerRequests';
import './VolunteerDetail.scss';

class VolunteerDetail extends React.Component {
  state = {
    singleVolunteer: {},
  };

  editVolunteer = (e) => {
    e.preventDefault();
    const { singleVolunteer } = this.state;
    this.props.history.push(`/volunteeredit/${singleVolunteer.id}`);
  }

  backToVolunteersView = (e) => {
    this.props.history.push('/volunteers');
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    volunteerRequests.getSingleVolunteer(id).then((singleVolunteer) => {
      this.setState({ singleVolunteer });
    });
  }

  render() {
    const { singleVolunteer } = this.state;
    return (
      <div>
        <h1>Volunteer Details</h1>
        <button class="btn btn-primary" onClick={this.backToVolunteersView}>
          <i class="fas fa-arrow-circle-left fa-2x"></i>
        </button>

        <div class="card mx-auto mt-4 animated zoomIn" style={{ width: '35%' }}>
          <div class="card-body">
            <h4><strong>First Name:</strong> {singleVolunteer.firstName}</h4>
            <h4><strong>Last Name:</strong> {singleVolunteer.lastName}</h4>
            <h4><strong>Street:</strong> {singleVolunteer.street}</h4>
            <h4><strong>City:</strong> {singleVolunteer.city}</h4>
            <h4><strong>State:</strong> {singleVolunteer.state}</h4>
            <h4><strong>Zipcode:</strong> {singleVolunteer.zipCode}</h4>
            <h4><strong>Phone:</strong> {singleVolunteer.phoneNumber}</h4>
            <span><button className="btn btn-primary" onClick={this.editVolunteer}>
              <i class="fas fa-pencil-alt fa-2x"></i>
            </button></span>
          </div>
        </div>


      </div>
    );
  }
}

export default withRouter(VolunteerDetail);
