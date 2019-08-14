import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
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

  genderChange = e => this.formFieldStringState('gender', e);

  gradeChange = e => this.formFieldStringState('grade', e);

  chairChange = e => this.formFieldStringState('chair', e);

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
        <form onSubmit={this.formSubmit} autoComplete="off" className="add-edit-form">
          <Row>
            <Col className="col-md-6">
              <div className="form-group">
                <label htmlFor="first name"><strong>First Name</strong></label>
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
            </Col>
            <Col className="col-md-6">
              <div className="form-group">
                <label htmlFor="last name"><strong>Last Name</strong></label>
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
            </Col>
          </Row>
          <Row>
            <Col className="col-md-12">
              <div className="form-group">
                <label htmlFor="street"><strong>Street</strong></label>
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
            </Col>
          </Row>
          <Row>
            <Col className="col-md-4">
              <div className="form-group">
                <label htmlFor="city"><strong>City</strong></label>
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
            </Col>
            <Col className="col-md-4">

              <FormGroup className="form-group">
                <Label htmlFor="condition"><strong>State</strong></Label>
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
            </Col>
            <Col className="col-md-4">
              <div className="form-group">
                <label htmlFor="zipcode"><strong>ZipCode</strong></label>
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
            </Col>
          </Row>
          <Row>
            <Col className="col-md-4">
              <FormGroup className="form-group">
                <Label htmlFor="gender"><strong>Gender</strong></Label>
                <Input type="select" onChange={this.genderChange} value={newStudent.gender}>
                  <option>Male</option>
                  <option>Female</option>
                </Input>
              </FormGroup>
            </Col>
            <Col className="col-md-4">
              <FormGroup className="form-group">
                <Label htmlFor="grade"><strong>Grade</strong></Label>
                <Input type="select" onChange={this.gradeChange} value={newStudent.grade}>
                  <option>Freshman</option>
                  <option>Sophomore</option>
                  <option>Junior</option>
                  <option>Senior</option>
                </Input>
              </FormGroup>
            </Col>
            <Col className="col-md-4">
              <FormGroup className="form-group">
                <Label htmlFor="chair"><strong>Chair</strong></Label>
                <Input type="select" onChange={this.chairChange} value={newStudent.chair}>
                  <option>1st</option>
                  <option>2nd</option>
                  <option>3rd</option>
                  <option>4th</option>
                  <option>5th</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <button className="btn btn-success"><i class="far fa-check-square fa-2x"></i></button>
        </form>
      </div>
    );
  }
}

export default withRouter(StudentEdit);
