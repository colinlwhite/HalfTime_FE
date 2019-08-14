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
          <button class="btn btn-primary" onClick={this.backToEventsView}><i class="fas fa-arrow-circle-left fa-2x"></i></button>
            <div class="card mx-auto mt-4 animated zoomIn" style={{ width: '35%' }}>
              <div class="card-body">
                <h5><strong>Name:</strong> {singleEvent.name}</h5>
                <h5><strong>Description:</strong> {singleEvent.description}</h5>
                <h5><strong>Date:</strong> {utility.dateFormat(singleEvent.date)}</h5>
                <h5><strong>Type:</strong> {singleEvent.type}</h5>
                <h5><strong>Street:</strong> {singleEvent.street}</h5>
                <h5><strong>City:</strong> {singleEvent.city}</h5>
                <h5><strong>State:</strong> {singleEvent.state}</h5>
                <h5><strong>Zip Code:</strong> {singleEvent.zipCode}</h5>
        <span><button className="btn btn-primary" onClick={this.editEvent}><i class="fas fa-pencil-alt fa-2x"></i></button></span>
        </div>
        </div>

      </div>
    );
  }
}

export default withRouter(EventDetail);
