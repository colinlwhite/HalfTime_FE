import React from 'react';
import SearchField from 'react-search-field';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';
import { NavLink } from 'reactstrap';
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
        <h3>{studentItemComponents}</h3>
      </div>
    );
  }
}

export default withRouter(Students);
