import React from 'react';
import SearchField from 'react-search-field';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import volunteerRequests from '../../helpers/data/volunteerRequests';
import VolunteerItem from '../VolunteerItem/VolunteerItem';
import './Volunteers.scss';

class Volunteers extends React.Component {
  state = {
    volunteers: [],
    filteredVolunteers: [],
  }

  componentDidMount() {
    volunteerRequests.getVolunteers()
      .then((volunteers) => {
        this.setState({
          volunteers,
          filteredVolunteers: volunteers,
        });
      })
      .catch(err => ('err'));
  }

  deleteOneVolunteer = (volunteerId) => {
    volunteerRequests.deleteVolunteer(volunteerId)
      .then(() => {
        volunteerRequests.getVolunteers()
          .then((volunteers) => {
            this.setState({
              volunteers,
              filteredVolunteers: volunteers,
            });
          });
      })
      .catch(err => console.error('error in deleting', err));
  }

  onChange = (value, e) => {
    const { volunteers } = this.state;
    const filteredVolunteers = [];
    e.preventDefault();
    if (!value) {
      this.setState({ filteredVolunteers: volunteers });
    } else {
      volunteers.forEach((volunteer) => {
        if (volunteer.firstName.toLowerCase().includes(value.toLowerCase())
        || volunteer.lastName.toLowerCase().includes(value.toLowerCase())) {
          filteredVolunteers.push(volunteer);
        }
        this.setState({ filteredVolunteers });
      });
    }
  }

  onSelect = (id) => {
    this.props.history.push(`/volunteer/${id}`);
  };

  render() {
    const { filteredVolunteers } = this.state;
    const volunteerItemComponents = filteredVolunteers.map(volunteer => (
      <VolunteerItem
      key={volunteer.id}
      volunteer={volunteer}
      deleteSingleVolunteer={this.deleteOneVolunteer}
      onSelect={this.onSelect}
      />
    ));
    return (
      <div>
        <h1>Volunteers</h1>
        <NavLink tag={RRNavLink} to='/volunteeradd'><i class="fas fa-plus-circle fa-3x"></i></NavLink>
        <SearchField
            placeholder="Search Volunteers"
            onChange={ this.onChange }
            searchText=""
            classNames="search-bar"
          />
        <h3>{volunteerItemComponents}</h3>
      </div>
    );
  }
}

export default withRouter(Volunteers);
