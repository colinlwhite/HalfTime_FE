import React from 'react';
import { withRouter } from 'react-router-dom';
import studentRequests from '../../helpers/data/studentRequests';
import './StudentDetail.scss';

class StudentDetail extends React.Component {
    state = {
      singleStudent: {},
    };

    deleteStudent = (e) => {
    e.preventDefault();
    const { deleteSingleStudent, singleStudent } = this.state;
    deleteSingleStudent(singleStudent.id);
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
                <button onClick={this.backToStudentsView}>BACK TO STUDENTS</button>
                <h2>{singleStudent.firstName}</h2>
                <span><button className="btn btn-danger" onClick={this.deleteStudent}>DELETE</button></span>
                <span><button className="btn btn-primary" onClick={this.editStudent}>EDIT</button></span>
            </div>
    );
  }
}

export default withRouter(StudentDetail);
