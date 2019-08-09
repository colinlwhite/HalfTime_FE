import React from 'react';
import {
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
} from 'reactstrap';
import SearchField from 'react-search-field';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';
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
        <h1 className="animated slideInDown">Instruments</h1>
        <NavLink className="animated fadeIn"
        tag={RRNavLink} to='/instrumentadd'><i class="fas fa-plus-circle fa-3x"></i>
        </NavLink>
        <SearchField
            placeholder="Search Instruments"
            onChange={ this.onChange }
            searchText=""
            classNames="search-bar"
          />
          <div className="instrument-table-header">
          <Row>
            <Col className="col-sm-4 mt-2">
              <h3><strong>MODEL #</strong></h3>
            </Col>
            <Col className="col-sm-4 mt-2">
              <h3><strong>TYPE</strong></h3>
            </Col>
            <Col className="col-sm-4 mt-2">
              <h3><strong>ACTION</strong></h3>
            </Col>
          </Row>
          </div>
        <h3>{instrumentItemComponents}</h3>
      </div>
    );
  }
}

export default withRouter(Instruments);
