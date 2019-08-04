import React from 'react';
import { withRouter } from 'react-router-dom';
import './EventAdd.scss';
import eventRequests from '../../helpers/data/eventRequests';

const defaultEvent = {
  brand: '',
  category: '',
  condition: '',
  description: '',
  id: 0,
  modelNumber: '',
  name: '',
  studentId: 0,
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

    brandChange = e => this.formFieldStringState('brand', e);

    categoryChange = e => this.formFieldStringState('category', e);

    conditionChange = e => this.formFieldStringState('condition', e);

    descriptionChange = e => this.formFieldStringState('description', e);

    idChange = e => this.formFieldNumberState('id', e);

    modelNumberChange = e => this.formFieldStringState('modelNumber', e);

    nameChange = e => this.formFieldStringState('name', e);

    studentIdChange = e => this.formFieldNumberState('studentId', e);

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
  <label htmlFor="brand">Brand:</label>
  <input
    type="text"
    className="form-control"
    id="brand"
    aria-describedby="brand"
    placeholder="brand"
    value={newEvent.brand}
    onChange={this.brandChange}
  />
</div>

<div className="form-group">
  <label htmlFor="category">Category:</label>
  <input
    type="text"
    className="form-control"
    id="category"
    aria-describedby="category"
    placeholder="category"
    value={newEvent.category}
    onChange={this.categoryChange}
  />
</div>

<div className="form-group">
  <label htmlFor="condition">Condition:</label>
  <input
    type="text"
    className="form-control"
    id="condition"
    aria-describedby="condition"
    placeholder="condition"
    value={newEvent.condition}
    onChange={this.conditionChange}
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
  <label htmlFor="state">ID:</label>
  <input
    type="number"
    className="form-control"
    id="id"
    aria-describedby="id"
    placeholder="ID"
    value={newEvent.id}
    onChange={this.idChange}
  />
</div>

<div className="form-group">
  <label htmlFor="modelNumber">Model Number:</label>
  <input
    type="text"
    className="form-control"
    id="modelNumber"
    aria-describedby="modelNumber"
    placeholder="Model Number"
    value={newEvent.modelNumber}
    onChange={this.modelNumberChange}
  />
</div>

<div className="form-group">
  <label htmlFor="name">Name:</label>
  <input
    type="text"
    className="form-control"
    id="name"
    aria-describedby="Name"
    placeholder="Name"
    value={newEvent.name}
    onChange={this.nameChange}
  />
</div>

<div className="form-group">
  <label htmlFor="studentId">Student ID:</label>
  <input
    type="number"
    className="form-control"
    id="studentId"
    aria-describedby="studentId"
    placeholder=""
    value={newEvent.studentId}
    onChange={this.studentIdChange}
  />
</div>
<button className="btn btn-light">SAVE</button>
</form>
            </div>
      );
    }
}

export default withRouter(EventAdd);
