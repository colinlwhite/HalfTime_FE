import React from 'react';
import { withRouter } from 'react-router-dom';
import utility from '../../helpers/utils/utility';
import './EventItem.scss';

class EventItem extends React.Component {
  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleEvent, event } = this.props;
    deleteSingleEvent(event.id);
  };

  eventClick = () => {
    const { event, onSelect } = this.props;
    onSelect(event.id);
  };

  render() {
    const { event } = this.props;
    return (
      <div className="event-div mx-auto mb-3">
        <div className="card" style={{ width: '18rem' }}>
            <h2 onClick={this.eventClick} className="card-text">{event.name}</h2>
            <h2 className="card-text">{utility.dateFormat(event.date)}</h2>
            <h6>{event.type}</h6>
            <span><button className="btn btn-danger mb-2" onClick={this.deleteEvent}>DELETE</button></span>
        </div>
    </div>
    );
  }
}

export default withRouter(EventItem);
