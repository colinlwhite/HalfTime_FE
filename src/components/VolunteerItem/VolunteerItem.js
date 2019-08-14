import React from 'react';
import {
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
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
      <div className="volunteer-div animated slideInUp">
        <Row>
          <Col className="col-sm-4 mt-2">
          <h2 onClick={this.volunteerClick}>{volunteer.firstName} {volunteer.lastName}</h2>
          </Col>
          <Col className="col-sm-4 mt-2">
            <h2>{volunteer.street}</h2>
          </Col>
          <Col className="col-sm-4 mt-2">
            <h3><button className="btn btn-danger" onClick={this.deleteVolunteer}><i class="far fa-trash-alt fa-2x"></i></button></h3>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(VolunteerItem);
