import React from 'react';
import {
  Row,
  Col,
  NavLink,
} from 'reactstrap';
import SearchField from 'react-search-field';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';
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
        <h1 className="animated slideInDown">Volunteers</h1>
        <NavLink className="animated fadeIn"
        tag={RRNavLink} to='/volunteeradd'><i class="fas fa-plus-circle fa-3x"></i>
        </NavLink>
        <SearchField
            placeholder="Search Volunteers"
            onChange={ this.onChange }
            searchText=""
            classNames="search-bar"
          />
          <div className="volunteer-table-header">
          <Row>
            <Col className="col-sm-4 mt-2">
              <h3><strong>NAME</strong></h3>
            </Col>
            <Col className="col-sm-4 mt-2">
              <h3><strong>STREET</strong></h3>
            </Col>
            <Col className="col-sm-4 mt-2">
              <h3><strong>ACTION</strong></h3>
            </Col>
          </Row>
          </div>
        <h3>{volunteerItemComponents}</h3>
      </div>
    );
  }
}

export default withRouter(Volunteers);
