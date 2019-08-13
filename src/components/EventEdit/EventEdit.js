import React from 'react';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
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
        <form onSubmit={this.formSubmit} autoComplete="off" className="add-edit-form">

          <Row>
            <Col className="col-md-12">
              <div className="form-group">
                <label htmlFor="name"><strong>Name</strong></label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                  placeholder="Name"
                  value={newEvent.name}
                  onChange={this.nameChange}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6">
              <FormGroup className="form-group">
                <Label htmlFor="type"><strong>Type</strong></Label>
                <Input type="select" onChange={this.typeChange} value={newEvent.type}>
                  <option>Auditions</option>
                  <option>Community</option>
                  <option>Competition</option>
                  <option>Parade</option>
                  <option>Rehearsals</option>
                  <option>Sporting Event</option>
                </Input>
              </FormGroup>

            </Col>
            <Col className="col-md-6">
              <div className="form-group">
                <label htmlFor="description"><strong>Description</strong></label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  aria-describedby="description"
                  placeholder="Description"
                  value={newEvent.description}
                  onChange={this.descriptionChange}
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
                  value={newEvent.street}
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
                  value={newEvent.city}
                  onChange={this.cityChange}
                />
              </div>
            </Col>
            <Col className="col-md-4">
              <FormGroup className="form-group">
                <Label htmlFor="condition"><strong>State</strong></Label>
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
            </Col>
            <Col className="col-md-4">
              <div className="form-group">
                <label htmlFor="zipcode"><strong>Zip Code</strong></label>
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
            </Col>
          </Row>
          <button className="btn btn-light">SAVE</button>

        </form>
      </div>
    );
  }
}

export default withRouter(EventEdit);
