import React from 'react';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import instrumentRequests from '../../helpers/data/instrumentRequests';
import InstrumentItem from '../InstrumentItem/InstrumentItem';
import './Instruments.scss';

class Instruments extends React.Component {
  state = {
    instruments: [],
  }

  componentDidMount() {
    instrumentRequests.getInstruments()
      .then((instruments) => {
        this.setState({
          instruments,
        });
      })
      .catch(err => ('err'));
  }

  deleteOneInstrument = (instrumentId) => {
    instrumentRequests.deleteInstrument(instrumentId)
      .then(() => {
        instrumentRequests.getInstruments()
          .then((instruments) => {
            this.setState({ instruments });
          });
      })
      .catch(err => console.error('error in deleting', err));
  }

  onSelect = (id) => {
    this.props.history.push(`/instrument/${id}`);
  };

  render() {
    const { instruments } = this.state;
    const instrumentItemComponents = instruments.map(instrument => (
      <InstrumentItem
      key={instrument.id}
      instrument={instrument}
      deleteSingleInstrument={this.deleteOneInstrument}
      onSelect={this.onSelect}
      />
    ));
    return (
      <div>
        <NavLink tag={RRNavLink} to='/instrumentadd'><button className="btn btn-light">Add Instrument</button></NavLink>
        <h1>Instruments</h1>
        <h3>{instrumentItemComponents}</h3>
      </div>
    );
  }
}

export default withRouter(Instruments);
