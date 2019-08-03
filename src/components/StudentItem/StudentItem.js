import React from 'react';
import { withRouter } from 'react-router-dom';
import './StudentItem.scss';

class StudentItem extends React.Component {
    deleteStudent = (e) => {
      e.preventDefault();
      const { deleteSingleStudent, student } = this.props;
      deleteSingleStudent(student.id);
    };

    editStudent = (e) => {
      e.preventDefault();
      const { student } = this.props;
      this.props.history.push(`/studentedit/${student.id}`);
    }

    render() {
      const { student } = this.props;
      return (
            <div className="student-div">
                <h2>{student.firstName}</h2>
                <span><button className="btn btn-danger" onClick={this.deleteStudent}>DELETE</button></span>
                <span><button className="btn btn-primary" onClick={this.editStudent}>EDIT</button></span>
            </div>
      );
    }
}

export default withRouter(StudentItem);
