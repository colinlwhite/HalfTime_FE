import React from 'react';
import {
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
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
        <Row>
          <Col className="col-sm-4 mt-2">
            <h2 onClick={this.instrumentClick}>{instrument.modelNumber}</h2>
          </Col>
          <Col className="col-sm-4 mt-2">
            <h2>{instrument.name}</h2>
          </Col>
          <Col className="col-sm-4 mt-2">
          <span><button className="btn btn-danger" onClick={this.deleteInstrument}>DELETE</button></span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(InstrumentItem);
