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
import DatePicker from 'react-datepicker';
import { withRouter } from 'react-router-dom';
import './EventAdd.scss';
import eventRequests from '../../helpers/data/eventRequests';
import 'react-datepicker/dist/react-datepicker.css';

const defaultEvent = {
  name: '',
  date: '',
  type: '',
  description: '',
  street: '',
  city: '',
  state: '',
  zipCode: 0,
};

class EventAdd extends React.Component {
    state = {
      newEvent: defaultEvent,
    }

    formSubmitEvent = (newEvent) => {
      eventRequests.createEvent(newEvent)
        .then(() => {
          this.props.history.push('/events');
        });
    }

    formFieldStringState = (name, e) => {
      e.preventDefault();
      const tempEvent = { ...this.state.newEvent };
      tempEvent[name] = e.target.value;
      this.setState({ newEvent: tempEvent });
    }

    formFieldNumberState = (name, e) => {
      e.preventDefault();
      const tempEvent = { ...this.state.newEvent };
      tempEvent[name] = e.target.value * 1;
      this.setState({ newEvent: tempEvent });
    }

    nameChange = e => this.formFieldStringState('name', e);

    handleDateChange = (date) => {
      const tempEvent = { ...this.state.newEvent };
      tempEvent.date = new Date(date);
      this.setState({ newEvent: tempEvent });
    }

    typeChange = e => this.formFieldStringState('type', e);

    descriptionChange = e => this.formFieldStringState('description', e);

    streetChange = e => this.formFieldStringState('street', e);

    cityChange = e => this.formFieldStringState('city', e);

    stateChange = e => this.formFieldStringState('state', e);

    zipCodeChange = e => this.formFieldNumberState('zipCode', e);

    formSubmit = (e) => {
      e.preventDefault();
      const myEvent = { ...this.state.newEvent };
      this.formSubmitEvent(myEvent);
    }

    render() {
      const { newEvent } = this.state;
      return (
            <div className="listing-form col">
                <h1>Add Event</h1>
                <form onSubmit={this.formSubmit} autoComplete="off">

<div className="form-group">
  <label htmlFor="name">Name:</label>
  <input
    type="text"
    className="form-control"
    id="name"
    aria-describedby="name"
    placeholder="name"
    value={newEvent.name}
    onChange={this.nameChange}
  />
</div>

 {/* Date */}
<div className="form-group">
<label className="date" htmlFor="date">Date:</label>
    <DatePicker
       selected={this.state.newEvent.date}
       onChange={this.handleDateChange}
       showTimeSelect
       timeFormat="h:mm aa"
       timeIntervals={15}
       dateFormat="MMMM d, yyyy h:mm aa"
       timeCaption="time"
      />
</div>

<FormGroup className="form-group">
    <Label htmlFor="type">Type:</Label>
      <Input type="select" onChange={this.typeChange} value={newEvent.type}>
          <option>Auditions</option>
          <option>Community</option>
          <option>Competition</option>
          <option>Parade</option>
          <option>Rehearsals</option>
          <option>Sporting Event</option>
        </Input>
  </FormGroup>

<div className="form-group">
  <label htmlFor="description">Description:</label>
  <input
    type="text"
    className="form-control"
    id="description"
    aria-describedby="description"
    placeholder="description"
    value={newEvent.description}
    onChange={this.descriptionChange}
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
    value={newEvent.street}
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
    value={newEvent.city}
    onChange={this.cityChange}
  />
</div>

<FormGroup className="form-group">
                      <Label htmlFor="condition">State:</Label>
                        <Input type="select" onChange={this.stateChange} value={newEvent.state}>
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
  <label htmlFor="zipcode">Zip Code:</label>
  <input
    type="number"
    className="form-control"
    id="zipcode"
    aria-describedby="zipcode"
    placeholder=""
    value={newEvent.zipCode}
    onChange={this.zipCodeChange}
  />
</div>
{/* <button className="btn btn-light">SAVE</button> */}
<button><i class="fas fa-check-circle fa-3x"></i></button>
</form>
            </div>
      );
    }
}

export default withRouter(EventAdd);
