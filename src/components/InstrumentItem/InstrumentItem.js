import React from 'react';
import { withRouter } from 'react-router-dom';
import './InstrumentItem.scss';

class InstrumentItem extends React.Component {
  deleteInstrument = (e) => {
    e.preventDefault();
    const { deleteSingleInstrument, instrument } = this.props;
    deleteSingleInstrument(instrument.id);
  };

  instrumentClick = () => {
    const { instrument, onSelect } = this.props;
    onSelect(instrument.id);
  };

  render() {
    const { instrument } = this.props;
    return (
      <div className="instrument-div">
        <h2 onClick={this.instrumentClick}>{instrument.modelNumber}</h2>
        <span><button className="btn btn-danger" onClick={this.deleteInstrument}>DELETE</button></span>
      </div>
    );
  }
}

export default withRouter(InstrumentItem);
