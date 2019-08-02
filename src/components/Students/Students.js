import React from 'react';
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
        console.log(students);
        this.setState({
          students,
        });
      })
      .catch(err => ('err'));
  }

  render() {
    const { students } = this.state;
    const studentItemComponents = students.map(student => (
      <StudentItem
      key={student.id}
      student={student}
      />
    ));
    return (
      <div>
        <h1>Students</h1>
        <h3>{studentItemComponents}</h3>
      </div>
    );
  }
}

export default Students;
