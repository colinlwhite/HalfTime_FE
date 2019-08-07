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
        <div class="card mx-auto mt-4 detail-card" style={{ width: '35%' }}>
        <div class="card-body">
        <h5 class="card-title">Details</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <h3>{singleEvent.name}</h3>
        <h3>{singleEvent.description}</h3>
        <h3>{utility.dateFormat(singleEvent.date)}</h3>
        <h3>{singleEvent.type}</h3>
        <h3>{singleEvent.street}</h3>
        <h3>{singleEvent.city}</h3>
        <h3>{singleEvent.state}</h3>
        <h3>{singleEvent.zipCode}</h3>
        <span><button className="btn btn-primary" onClick={this.editEvent}>EDIT</button></span>
        </div>
        </div>

      </div>
    );
  }
}

export default withRouter(EventDetail);
