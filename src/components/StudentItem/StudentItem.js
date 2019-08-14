import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import './StudentItem.scss';

class StudentItem extends React.Component {
  deleteStudent = (e) => {
    e.preventDefault();
    const { deleteSingleStudent, student } = this.props;
    deleteSingleStudent(student.id);
  };

  studentClick = () => {
    const { student, onSelect } = this.props;
    onSelect(student.id);
  };

  render() {
    const { student } = this.props;
    return (
      <div className="student-div animated slideInUp">
        <Row>
          <Col className="col-sm-4 mt-2">
            <h3 onClick={this.studentClick}>{student.firstName} {student.lastName}</h3>
          </Col>
          <Col className="col-sm-4 mt-2">
            <h3>{student.grade}</h3>
          </Col>
          <Col className="col-sm-4 mt-2">
            <h3><button className="btn btn-danger" onClick={this.deleteStudent}>
              <i class="far fa-trash-alt fa-2x"></i>
            </button></h3>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(StudentItem);
