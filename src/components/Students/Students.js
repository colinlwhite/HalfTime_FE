import React from 'react';
import {
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
} from 'reactstrap';
import SearchField from 'react-search-field';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';
import studentRequests from '../../helpers/data/studentRequests';
import StudentItem from '../StudentItem/StudentItem';
import './Students.scss';

class Students extends React.Component {
  state = {
    students: [],
    filteredStudents: [],
  }

  componentDidMount() {
    studentRequests.getStudents()
      .then((students) => {
        this.setState({
          students,
          filteredStudents: students,
        });
      })
      .catch(err => ('err'));
  }

  deleteOneStudent = (studentId) => {
    studentRequests.deleteStudent(studentId)
      .then(() => {
        studentRequests.getStudents()
          .then((students) => {
            this.setState({
              students,
              filteredStudents: students,
            });
          });
      })
      .catch(err => console.error('error in deleting', err));
  }

  onChange = (value, e) => {
    const { students } = this.state;
    const filteredStudents = [];
    e.preventDefault();
    if (!value) {
      this.setState({ filteredStudents: students });
    } else {
      students.forEach((student) => {
        if (student.firstName.toLowerCase().includes(value.toLowerCase())
        || student.lastName.toLowerCase().includes(value.toLowerCase())) {
          filteredStudents.push(student);
        }
        this.setState({ filteredStudents });
      });
    }
  }

  onSelect = (id) => {
    this.props.history.push(`/student/${id}`);
  };

  render() {
    const { filteredStudents } = this.state;
    const studentItemComponents = filteredStudents.map(student => (
      <StudentItem
      key={student.id}
      student={student}
      deleteSingleStudent={this.deleteOneStudent}
      onSelect={this.onSelect}
      />
    ));
    return (
      <div>
        <h1 className="animated slideInDown">Students</h1>
        <NavLink className="animated fadeIn"
        tag={RRNavLink} to='/studentadd'><i class="fas fa-plus-circle fa-3x"></i>
        </NavLink>
        <SearchField
            placeholder="Search Students"
            onChange={ this.onChange }
            searchText=""
            classNames="search-bar"
          />
          <div className="student-table-header">
          <Row>
            <Col className="col-sm-4 mt-2">
              <h3><strong>NAME</strong></h3>
            </Col>
            <Col className="col-sm-4 mt-2">
              <h3><strong>GRADE</strong></h3>
            </Col>
            <Col className="col-sm-4 mt-2">
              <h3><strong>ACTION</strong></h3>
            </Col>
          </Row>
          </div>
        <h3>{studentItemComponents}</h3>
      </div>
    );
  }
}

export default withRouter(Students);
