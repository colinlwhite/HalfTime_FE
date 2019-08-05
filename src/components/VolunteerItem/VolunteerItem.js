import React from 'react';
import { withRouter } from 'react-router-dom';
import './VolunteerItem.scss';

class VolunteerItem extends React.Component {
  deleteVolunteer = (e) => {
    e.preventDefault();
    const { deleteSingleVolunteer, volunteer } = this.props;
    deleteSingleVolunteer(volunteer.id);
  };

  volunteerClick = () => {
    const { volunteer, onSelect } = this.props;
    onSelect(volunteer.id);
  };

  render() {
    const { volunteer } = this.props;
    return (
      <div className="volunteer-div">
        <h2 onClick={this.volunteerClick}>{volunteer.firstName} {volunteer.lastName}</h2>
        <span><button className="btn btn-danger" onClick={this.deleteVolunteer}>DELETE</button></span>
      </div>
    );
  }
}

export default withRouter(VolunteerItem);
