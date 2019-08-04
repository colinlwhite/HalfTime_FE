import React from 'react';
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
      <div className="student-div">
        <h2 onClick={this.studentClick}>{student.firstName}</h2>
        <span><button className="btn btn-danger" onClick={this.deleteStudent}>DELETE</button></span>
      </div>
    );
  }
}

export default withRouter(StudentItem);
