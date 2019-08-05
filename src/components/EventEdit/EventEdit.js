import React from 'react';
import DatePicker from 'react-datepicker';
import { withRouter } from 'react-router-dom';
import eventRequests from '../../helpers/data/eventRequests';
import './EventEdit.scss';
import 'react-datepicker/dist/react-datepicker.css';

class EventEdit extends React.Component {
    state = {
      newEvent: {},
    }

    formSubmitEventEdit = (newEvent) => {
      const eventId = this.props.match.params.id;
      eventRequests.updateEvent(eventId, newEvent)
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

    // handleDateChange = (date) => {
    //   const tempEvent = { ...this.state.newEvent };
    //   tempEvent.date = new Date(date);
    //   this.setState({ newEvent: date });
    // }

    typeChange = e => this.formFieldStringState('type', e);

    descriptionChange = e => this.formFieldStringState('description', e);

    streetChange = e => this.formFieldStringState('street', e);

    cityChange = e => this.formFieldStringState('city', e);

    stateChange = e => this.formFieldStringState('state', e);

    zipCodeChange = e => this.formFieldNumberState('zipCode', e);


    formSubmit = (e) => {
      e.preventDefault();
      const myEvent = { ...this.state.newEvent };
      this.formSubmitEventEdit(myEvent);
    }

    componentDidMount() {
      const eventId = this.props.match.params.id;
      eventRequests.getSingleEvent(eventId)
        .then((event) => {
          this.setState({ newEvent: event });
        })
        .catch(err => console.error('error with single event', err));
    }

    render() {
      const { newEvent } = this.state;
      return (
            <div className="listing-form col">
                <h1>Edit Event</h1>
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
{/* <div className="form-group">
<label className="date" htmlFor="date">Date:</label>
    <DatePicker
       selected={this.state.newEvent.date}
       onChange={this.handleDateChange}
       showTimeSelect
       timeFormat="h:mm aa"
       timeIntervals={15}
       dateFormat="MMMM d, yyyy h:mm aa"
       timeCaption="time"
       strictParsing
      />
</div> */}

<div className="form-group">
  <label htmlFor="type">Type:</label>
  <input
    type="text"
    className="form-control"
    id="type"
    aria-describedby="type"
    placeholder="type"
    value={newEvent.type}
    onChange={this.typeChange}
  />
</div>

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

<div className="form-group">
  <label htmlFor="state">State:</label>
  <input
    type="text"
    className="form-control"
    id="state"
    aria-describedby="state"
    placeholder="state"
    value={newEvent.state}
    onChange={this.stateChange}
  />
</div>

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
<button className="btn btn-light">SAVE</button>

                </form>
            </div>
      );
    }
}

export default withRouter(EventEdit);
