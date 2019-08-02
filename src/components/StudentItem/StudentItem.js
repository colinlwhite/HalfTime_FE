import React from 'react';
import './StudentItem.scss';

class StudentItem extends React.Component {
    deleteStudent = (e) => {
      e.preventDefault();
      const { deleteSingleStudent, student } = this.props;
      deleteSingleStudent(student.id);
    };

    render() {
      const { student } = this.props;
      return (
            <div className="student-div">
                <h2>{student.firstName}</h2>
                <span><button className="btn btn-danger" onClick={this.deleteStudent}>DELETE</button></span>
            </div>
      );
    }
}

export default StudentItem;
