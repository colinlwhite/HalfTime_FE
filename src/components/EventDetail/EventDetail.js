import React from 'react';
import { withRouter } from 'react-router-dom';
import utility from '../../helpers/utils/utility';
import eventRequests from '../../helpers/data/eventRequests';
import './EventDetail.scss';

class EventDetail extends React.Component {
  state = {
    singleEvent: {},
  };

  editEvent = (e) => {
    e.preventDefault();
    const { singleEvent } = this.state;
    this.props.history.push(`/eventedit/${singleEvent.id}`);
  }

  backToEventsView = (e) => {
    this.props.history.push('/events');
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    eventRequests.getSingleEvent(id).then((singleEvent) => {
      this.setState({ singleEvent });
    });
  }

  render() {
    const { singleEvent } = this.state;
    return (
      <div>
        <h1>Event Details</h1>
        <button onClick={this.backToEventsView}>BACK TO EVENTS</button>
        <h2>{singleEvent.name}</h2>
        <h3>{utility.dateFormat(singleEvent.date)}</h3>
        <span><button className="btn btn-primary" onClick={this.editEvent}>EDIT</button></span>
      </div>
    );
  }
}

export default withRouter(EventDetail);
