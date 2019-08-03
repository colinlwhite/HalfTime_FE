import React from 'react';
import { withRouter } from 'react-router-dom';
import studentRequests from '../../helpers/data/studentRequests';
import './StudentEdit.scss';

class StudentEdit extends React.Component {
    state = {
        newStudent: {},
    }

    formSubmitStudentEdit = (newStudent) => {
        const studentId = this.props.match.params.id;
        studentRequests.updateStudent(studentId, newStudent)
            .then(() => {
                this.props.history.push('/students');
            });
    }

    formFieldStringState = (name, e) => {
        e.preventDefault();
        const tempStudent = { ...this.state.newStudent };
        tempStudent[name] = e.target.value;
        this.setState({ newStudent: tempStudent });
    }

    formFieldNumberState = (name, e) => {
        e.preventDefault();
        const tempStudent = { ...this.state.newStudent };
        tempStudent[name] = e.target.value * 1;
        this.setState({ newStudent: tempStudent });
    }

    firstnameChange = e => this.formFieldStringState('firstName', e);

    lastnameChange = e => this.formFieldStringState('lastName', e);

    streetChange = e => this.formFieldStringState('street', e);

    cityChange = e => this.formFieldStringState('city', e);

    stateChange = e => this.formFieldStringState('state', e);

    zipcodeChange = e => this.formFieldNumberState('zipCode', e);

    formSubmit = (e) => {
        e.preventDefault();
        const myStudent = { ...this.state.newStudent };
        this.formSubmitStudentEdit(myStudent);
    }

    componentDidMount() {
        const studentId = this.props.match.params.id;
        studentRequests.getSingleStudent(studentId)
            .then((student) => {
                this.setState({ newStudent: student });
            })
            .catch(err => console.error('error with single student', err));
    }

    render() {
        const { newStudent } = this.state;
        return (
            <div className="listing-form col">
                <h1>Edit Student</h1>
                <form onSubmit={this.formSubmit} autoComplete="off">

                    <div className="form-group">
                        <label htmlFor="first name">First Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            aria-describedby="firstName"
                            placeholder="First Name"
                            value={newStudent.firstName}
                            onChange={this.firstnameChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="last name">Last Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            aria-describedby="lastName"
                            placeholder="Last Name"
                            value={newStudent.lastName}
                            onChange={this.lastnameChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="street">Street:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="street"
                            aria-describedby="street"
                            placeholder="street"
                            value={newStudent.street}
                            onChange={this.streetChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="city"
                            aria-describedby="city"
                            placeholder="City"
                            value={newStudent.city}
                            onChange={this.cityChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="state"
                            aria-describedby="state"
                            placeholder="State"
                            value={newStudent.state}
                            onChange={this.stateChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="zipcode">ZipCode:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="zipcode"
                            aria-describedby="Zip"
                            placeholder="12345"
                            value={newStudent.zipCode}
                            onChange={this.zipcodeChange}
                        />
                    </div>
                    <button className="btn btn-light">SAVE</button>
                </form>
            </div>
        );
    }
}

export default withRouter(StudentEdit);
