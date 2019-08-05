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
      <div className="event-div">
        <h2 onClick={this.eventClick}>{event.name}</h2>
        <h3>{utility.dateFormat(event.date)}</h3>
        <span><button className="btn btn-danger" onClick={this.deleteEvent}>DELETE</button></span>
      </div>
    );
  }
}

export default withRouter(EventItem);
