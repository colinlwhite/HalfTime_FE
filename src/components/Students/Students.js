import React from 'react';
import studentRequests from '../../helpers/data/studentRequests';
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
    return (
      <div>
        <h1>Students</h1>
      </div>
    );
  }
}

export default Students;
