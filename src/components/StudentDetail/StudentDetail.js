import React from 'react';
import {
  Button,
  Row,
  Col,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import studentRequests from '../../helpers/data/studentRequests';
import './StudentDetail.scss';

class StudentDetail extends React.Component {
  state = {
    singleStudent: {},
  };

  editStudent = (e) => {
    e.preventDefault();
    const { singleStudent } = this.state;
    this.props.history.push(`/studentedit/${singleStudent.id}`);
  }

  backToStudentsView = (e) => {
    this.props.history.push('/students');
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    studentRequests.getSingleStudent(id).then((singleStudent) => {
      this.setState({ singleStudent });
    });
  }

  render() {
    const { singleStudent } = this.state;
    return (
      <div>
        <h1>Student Details</h1>
        <button class="btn btn-primary" onClick={this.backToStudentsView}>
          <i class="fas fa-arrow-circle-left fa-2x"></i>
        </button>
        <div className="card mx-auto mt-4 detail-card animated zoomIn" style={{ width: '35%' }}>
          <div class="card-body">
            <Row className="student-body">
              <Col className="col-sm-6">
                <div className="student-address">
                  <Row><h4><strong>Address</strong></h4></Row>
                  <Row><h6>{singleStudent.firstName} {singleStudent.lastName}</h6></Row>
                  <Row><h6>{singleStudent.street}</h6></Row>
                  <Row><h6>{singleStudent.city}, {singleStudent.state} {singleStudent.zipCode}</h6></Row>
                </div>
              </Col>

              <Col className="col-sm-6 student-details">
                <div>
                  <Row><h4><strong>Details</strong></h4></Row>
                  <Row><h6><strong>Grade:</strong> {singleStudent.grade}</h6></Row>
                  <Row><h6><strong>Gender:</strong> {singleStudent.gender}</h6></Row>
                  <Row><h6><strong>Chair:</strong> {singleStudent.chair}</h6></Row>
                </div>
              </Col>
            </Row>
            <Row className="col-sm-12 button-row mt-2">
              <Button color="primary" onClick={this.editStudent}><i class="fas fa-pencil-alt fa-2x"></i></Button>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StudentDetail);
