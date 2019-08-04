import React from 'react';
import { withRouter } from 'react-router-dom';
import instrumentRequests from '../../helpers/data/instrumentRequests';
import './InstrumentDetail.scss';

class InstrumentDetail extends React.Component {
  state = {
    singleInstrument: {},
  };

  editInstrument = (e) => {
    e.preventDefault();
    const { singleInstrument } = this.state;
    this.props.history.push(`/instrumentedit/${singleInstrument.id}`);
  }

  backToInstrumentsView = (e) => {
    this.props.history.push('/instruments');
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    instrumentRequests.getSingleInstrument(id).then((singleInstrument) => {
      this.setState({ singleInstrument });
    });
  }

  render() {
    const { singleInstrument } = this.state;
    return (
      <div>
        <h1>Instrument Details</h1>
        <button onClick={this.backToInstrumentsView}>BACK TO INSTRUMENTS</button>
        <h2>{singleInstrument.name}</h2>
        <span><button className="btn btn-primary" onClick={this.editInstrument}>EDIT</button></span>
      </div>
    );
  }
}

export default withRouter(InstrumentDetail);
