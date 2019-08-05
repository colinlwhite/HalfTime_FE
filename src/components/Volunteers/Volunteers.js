import React from 'react';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import volunteerRequests from '../../helpers/data/volunteerRequests';
import VolunteerItem from '../VolunteerItem/VolunteerItem';
import './Volunteers.scss';

class Volunteers extends React.Component {
  state = {
    volunteers: [],
  }

  componentDidMount() {
    volunteerRequests.getVolunteers()
      .then((volunteers) => {
        this.setState({
          volunteers,
        });
      })
      .catch(err => ('err'));
  }

  deleteOneVolunteer = (volunteerId) => {
    volunteerRequests.deleteVolunteer(volunteerId)
      .then(() => {
        volunteerRequests.getVolunteers()
          .then((volunteers) => {
            this.setState({ volunteers });
          });
      })
      .catch(err => console.error('error in deleting', err));
  }

  onSelect = (id) => {
    this.props.history.push(`/volunteer/${id}`);
  };

  render() {
    const { volunteers } = this.state;
    const volunteerItemComponents = volunteers.map(volunteer => (
      <VolunteerItem
      key={volunteer.id}
      volunteer={volunteer}
      deleteSingleVolunteer={this.deleteOneVolunteer}
      onSelect={this.onSelect}
      />
    ));
    return (
      <div>
        <NavLink tag={RRNavLink} to='/volunteeradd'><button className="btn btn-light">Add Volunteer</button></NavLink>
        <h1>Volunteers</h1>
        <h3>{volunteerItemComponents}</h3>
      </div>
    );
  }
}

export default withRouter(Volunteers);
