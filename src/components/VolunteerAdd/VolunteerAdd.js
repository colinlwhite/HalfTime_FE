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
import './VolunteerAdd.scss';
import volunteerRequests from '../../helpers/data/volunteerRequests';

const defaultVolunteer = {
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  state: '',
  zipCode: 0,
  phoneNumber: '',
};

class VolunteerAdd extends React.Component {
    state = {
      newVolunteer: defaultVolunteer,
    }

    formSubmitVolunteer = (newVolunteer) => {
      volunteerRequests.createVolunteer(newVolunteer)
        .then(() => {
          this.props.history.push('/volunteers');
        });
    }

    formFieldStringState = (name, e) => {
      e.preventDefault();
      const tempVolunteer = { ...this.state.newVolunteer };
      tempVolunteer[name] = e.target.value;
      this.setState({ newVolunteer: tempVolunteer });
    }

    formFieldNumberState = (name, e) => {
      e.preventDefault();
      const tempVolunteer = { ...this.state.newVolunteer };
      tempVolunteer[name] = e.target.value * 1;
      this.setState({ newVolunteer: tempVolunteer });
    }

    firstNameChange = e => this.formFieldStringState('firstName', e);

    lastNameChange = e => this.formFieldStringState('lastName', e);

    streetChange = e => this.formFieldStringState('street', e);

    cityChange = e => this.formFieldStringState('city', e);

    stateChange = e => this.formFieldStringState('state', e);

    zipCodeChange = e => this.formFieldNumberState('zipCode', e);

    phoneNumberChange = e => this.formFieldStringState('phoneNumber', e);

    formSubmit = (e) => {
      e.preventDefault();
      const myVolunteer = { ...this.state.newVolunteer };
      this.formSubmitVolunteer(myVolunteer);
    }

    render() {
      const { newVolunteer } = this.state;
      return (
            <div className="listing-form col">
                <h1>Add Volunteer</h1>
                <form onSubmit={this.formSubmit} autoComplete="off">

<div className="form-group">
  <label htmlFor="firstName">First Name:</label>
  <input
    type="text"
    className="form-control"
    id="firstName"
    aria-describedby="firstName"
    placeholder="firstName"
    value={newVolunteer.firstName}
    onChange={this.firstNameChange}
  />
</div>

<div className="form-group">
  <label htmlFor="lastName">Last Name:</label>
  <input
    type="text"
    className="form-control"
    id="lastName"
    aria-describedby="lastName"
    placeholder="lastName"
    value={newVolunteer.lastName}
    onChange={this.lastNameChange}
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
    value={newVolunteer.street}
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
    placeholder="city"
    value={newVolunteer.city}
    onChange={this.cityChange}
  />
</div>

<FormGroup className="form-group">
                      <Label htmlFor="condition">State:</Label>
                        <Input type="select" onChange={this.stateChange} value={newVolunteer.state}>
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
  <label htmlFor="zipCode">Zip:</label>
  <input
    type="number"
    className="form-control"
    id="zipCode"
    aria-describedby="zipCode"
    placeholder=""
    value={newVolunteer.zipCode}
    onChange={this.zipCodeChange}
    maxlength="5"
  />
</div>

<div className="form-group">
  <label htmlFor="phoneNumber">Phone:</label>
  <input
    type="text"
    className="form-control"
    id="phoneNumber"
    aria-describedby="phoneNumber"
    placeholder="+16150001234"
    value={newVolunteer.phoneNumber}
    onChange={this.phoneNumberChange}
    maxlength="12"
  />
</div>

<button className="btn btn-light">SAVE</button>
</form>
            </div>
      );
    }
}

export default withRouter(VolunteerAdd);
