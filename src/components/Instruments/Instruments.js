import React from 'react';
import SearchField from 'react-search-field';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import instrumentRequests from '../../helpers/data/instrumentRequests';
import InstrumentItem from '../InstrumentItem/InstrumentItem';
import './Instruments.scss';

class Instruments extends React.Component {
  state = {
    instruments: [],
    filteredInstruments: [],
  }

  componentDidMount() {
    instrumentRequests.getInstruments()
      .then((instruments) => {
        this.setState({
          instruments,
          filteredInstruments: instruments,
        });
      })
      .catch(err => ('err'));
  }

  deleteOneInstrument = (instrumentId) => {
    instrumentRequests.deleteInstrument(instrumentId)
      .then(() => {
        instrumentRequests.getInstruments()
          .then((instruments) => {
            this.setState({
              instruments,
              filteredInstruments: instruments,
            });
          });
      })
      .catch(err => console.error('error in deleting', err));
  }


  onChange = (value, e) => {
    const { instruments } = this.state;
    const filteredInstruments = [];
    e.preventDefault();
    if (!value) {
      this.setState({ filteredInstruments: instruments });
    } else {
      instruments.forEach((instrument) => {
        if (instrument.name.toLowerCase().includes(value.toLowerCase())
        || instrument.modelNumber.toLowerCase().includes(value.toLowerCase())) {
          filteredInstruments.push(instrument);
        }
        this.setState({ filteredInstruments });
      });
    }
  }

  onSelect = (id) => {
    this.props.history.push(`/instrument/${id}`);
  };

  render() {
    const { filteredInstruments } = this.state;
    const instrumentItemComponents = filteredInstruments.map(instrument => (
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
        <SearchField
            placeholder="Search Instruments"
            onChange={ this.onChange }
            searchText=""
            classNames="search-bar"
          />
        <h1>Instruments</h1>
        <h3>{instrumentItemComponents}</h3>
      </div>
    );
  }
}

export default withRouter(Instruments);
