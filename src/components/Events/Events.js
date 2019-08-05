import React from 'react';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import eventRequests from '../../helpers/data/eventRequests';
import EventItem from '../EventItem/EventItem';
import './Events.scss';

class Events extends React.Component {
  state = {
    events: [],
  }

  componentDidMount() {
    eventRequests.getEvents()
      .then((events) => {
        this.setState({
          events,
        });
      })
      .catch(err => ('err'));
  }

  deleteOneEvent = (eventId) => {
    eventRequests.deleteEvent(eventId)
      .then(() => {
        eventRequests.getEvents()
          .then((events) => {
            this.setState({ events });
          });
      })
      .catch(err => console.error('error in deleting', err));
  }

  onSelect = (id) => {
    this.props.history.push(`/event/${id}`);
  };

  sendTextMessage = () => {
    eventRequests.sendSMS();
  }

  render() {
    const { events } = this.state;
    const eventItemComponents = events.map(event => (
      <EventItem
      key={event.id}
      event={event}
      deleteSingleEvent={this.deleteOneEvent}
      onSelect={this.onSelect}
      />
    ));
    return (
      <div>
        <NavLink tag={RRNavLink} to='/eventadd'><button className="btn btn-light">Add Event</button></NavLink>
        <span><button className="btn btn-primary" onClick={this.sendTextMessage}>SEND NEXT EVENT REMINDER</button></span>
        <h1>Events</h1>
        <h3>{eventItemComponents}</h3>
      </div>
    );
  }
}

export default withRouter(Events);
