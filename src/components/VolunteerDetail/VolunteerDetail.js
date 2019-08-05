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
        <h2>{singleVolunteer.name}</h2>
        <span><button className="btn btn-primary" onClick={this.editVolunteer}>EDIT</button></span>
      </div>
    );
  }
}

export default withRouter(VolunteerDetail);
