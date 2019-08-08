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
        <button onClick={this.backToVolunteersView}>BACK TO VOLUNTEERS</button>

        <div class="card mx-auto mt-4 detail-card" style={{ width: '35%' }}>
          <div class="card-body">
            <h5 class="card-title">Details</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <h3>{singleVolunteer.firstName}</h3>
                <h3>{singleVolunteer.lastName}</h3>
                <h3>{singleVolunteer.street}</h3>
                <h3>{singleVolunteer.city}</h3>
                <h3>{singleVolunteer.state}</h3>
                <h3>{singleVolunteer.zipCode}</h3>
                <h3>{singleVolunteer.phoneNumber}</h3>
        <span><button className="btn btn-primary" onClick={this.editVolunteer}>EDIT</button></span>
  </div>
</div>


      </div>
    );
  }
}

export default withRouter(VolunteerDetail);
