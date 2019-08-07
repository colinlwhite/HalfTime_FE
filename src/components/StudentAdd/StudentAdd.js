import React from 'react';
import {
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import './StudentAdd.scss';
import studentRequests from '../../helpers/data/studentRequests';

const defaultStudent = {
  firstname: '',
  lastname: '',
  street: '',
  city: '',
  state: '',
  zipcode: 0,
  gender: '',
  grade: '',
  chair: '',
};

class StudentAdd extends React.Component {
    state = {
      newStudent: defaultStudent,
    }

    formSubmitStudent = (newStudent) => {
      studentRequests.createStudent(newStudent)
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

    firstnameChange = e => this.formFieldStringState('firstname', e);

    lastnameChange = e => this.formFieldStringState('lastname', e);

    streetChange = e => this.formFieldStringState('street', e);

    cityChange = e => this.formFieldStringState('city', e);

    stateChange = e => this.formFieldStringState('state', e);

    zipcodeChange = e => this.formFieldNumberState('zipcode', e);

    genderChange = e => this.formFieldStringState('gender', e);

    gradeChange = e => this.formFieldStringState('grade', e);

    chairChange = e => this.formFieldStringState('chair', e);

    formSubmit = (e) => {
      e.preventDefault();
      const myStudent = { ...this.state.newStudent };
      this.formSubmitStudent(myStudent);
    }

    render() {
      const { newStudent } = this.state;
      return (
            <div className="listing-form col">
                <h1>Add Student</h1>
                <form onSubmit={this.formSubmit} autoComplete="off" className="add-edit-form">

<div className="form-group">
  <label htmlFor="first name">First Name:</label>
  <input
    type="text"
    className="form-control"
    id="firstname"
    aria-describedby="firstName"
    placeholder="First Name"
    value={newStudent.firstname}
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
    value={newStudent.lastname}
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
    placeholder="Street"
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

                      <FormGroup className="form-group">
                      <Label htmlFor="condition">State:</Label>
                        <Input type="select" onChange={this.stateChange} value={newStudent.state}>
                          <option>AL</option>
                          <option>AK</option>
                          <option>AZ</option>
                          <option>AR</option>
                          <option>CA</option>
                          <option>CO</option>
                          <option>CT</option>
                          <option>DE</option>
                          <option>FL</option>
                          <option>GA</option>
                          <option>HI</option>
                          <option>ID</option>
                          <option>IL</option>
                          <option>IN</option>
                          <option>IA</option>
                          <option>KS</option>
                          <option>KY</option>
                          <option>LA</option>
                          <option>ME</option>
                          <option>MD</option>
                          <option>MA</option>
                          <option>MI</option>
                          <option>MN</option>
                          <option>MS</option>
                          <option>MO</option>
                          <option>MT</option>
                          <option>NE</option>
                          <option>NV</option>
                          <option>NH</option>
                          <option>NJ</option>
                          <option>NM</option>
                          <option>NY</option>
                          <option>NC</option>
                          <option>ND</option>
                          <option>OH</option>
                          <option>OK</option>
                          <option>PA</option>
                          <option>RI</option>
                          <option>SC</option>
                          <option>SD</option>
                          <option>TN</option>
                          <option>TX</option>
                          <option>UT</option>
                          <option>VT</option>
                          <option>VA</option>
                          <option>WA</option>
                          <option>WV</option>
                          <option>WI</option>
                          <option>WY</option>
                        </Input>
                    </FormGroup>

<div className="form-group">
  <label htmlFor="zipcode">ZipCode:</label>
  <input
    type="number"
    className="form-control"
    id="zipcode"
    aria-describedby="Zip"
    placeholder="12345"
    value={newStudent.zipcode}
    onChange={this.zipcodeChange}
  />
</div>

<FormGroup className="form-group">
                      <Label htmlFor="gender">Gender:</Label>
                        <Input type="select" onChange={this.genderChange} value={newStudent.gender}>
                          <option>Male</option>
                          <option>Female</option>
                        </Input>
                    </FormGroup>

                    <FormGroup className="form-group">
                      <Label htmlFor="grade">Grade:</Label>
                        <Input type="select" onChange={this.gradeChange} value={newStudent.grade}>
                          <option>Freshman</option>
                          <option>Sophomore</option>
                          <option>Junior</option>
                          <option>Senior</option>
                        </Input>
                    </FormGroup>

                    <FormGroup className="form-group">
                      <Label htmlFor="chair">Chair:</Label>
                        <Input type="select" onChange={this.chairChange} value={newStudent.chair}>
                          <option>1st</option>
                          <option>2nd</option>
                          <option>3rd</option>
                          <option>4th</option>
                          <option>5th</option>
                        </Input>
                    </FormGroup>

<button className="btn btn-light">SAVE</button>
</form>
            </div>
      );
    }
}

export default withRouter(StudentAdd);
