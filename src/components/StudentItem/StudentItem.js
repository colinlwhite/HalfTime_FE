import React from 'react';
import './StudentItem.scss';

class StudentItem extends React.Component {
  render() {
    const { student } = this.props;
    return (
            <div className="student-div">
                <h2>{student.firstName}</h2>
            </div>
    );
  }
}

export default StudentItem;
