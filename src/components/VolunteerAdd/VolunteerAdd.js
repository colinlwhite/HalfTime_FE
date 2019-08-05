import React from 'react';
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

<div className="form-group">
  <label htmlFor="state">State:</label>
  <input
    type="text"
    className="form-control"
    id="state"
    aria-describedby="state"
    placeholder="state"
    value={newVolunteer.state}
    onChange={this.stateChange}
  />
</div>

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
  />
</div>

<div className="form-group">
  <label htmlFor="phoneNumber">Phone:</label>
  <input
    type="text"
    className="form-control"
    id="phoneNumber"
    aria-describedby="phoneNumber"
    placeholder="phoneNumber"
    value={newVolunteer.phoneNumber}
    onChange={this.phoneNumberChange}
  />
</div>

<button className="btn btn-light">SAVE</button>
</form>
            </div>
      );
    }
}

export default withRouter(VolunteerAdd);
