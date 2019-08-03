import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import studentRequests from '../../helpers/data/studentRequests';
import StudentItem from '../StudentItem/StudentItem';
import './Students.scss';

class Students extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    studentRequests.getStudents()
      .then((students) => {
        this.setState({
          students,
        });
      })
      .catch(err => ('err'));
  }

  deleteOneStudent = (studentId) => {
    studentRequests.deleteStudent(studentId)
      .then(() => {
        studentRequests.getStudents()
          .then((students) => {
            this.setState({ students });
          });
      })
      .catch(err => console.error('error in deleting', err));
  }

  render() {
    const { students } = this.state;
    const studentItemComponents = students.map(student => (
      <StudentItem
      key={student.id}
      student={student}
      deleteSingleStudent={this.deleteOneStudent}
      />
    ));
    return (
      <div>
        <NavLink tag={RRNavLink} to='/studentadd'><button className="btn btn-light">Add Student</button></NavLink>
        <h1>Students</h1>
        <h3>{studentItemComponents}</h3>
      </div>
    );
  }
}

export default Students;
