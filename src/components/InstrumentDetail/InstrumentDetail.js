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
            <div class="card mx-auto mt-4 animated zoomIn" style={{ width: '35%' }}>
              <div class="card-body">
                  <h6><strong>Instrument ID:</strong> {singleInstrument.id}</h6>
                  <h6><strong>Name:</strong> {singleInstrument.name}</h6>
                  <h6><strong>Brand:</strong> {singleInstrument.brand}</h6>
                  <h6><strong>Model Number:</strong> {singleInstrument.modelNumber}</h6>
                  <h6><strong>Category:</strong> {singleInstrument.category}</h6>
                  <h6><strong>Condition:</strong> {singleInstrument.condition}</h6>
                  <h6><strong>Description:</strong> {singleInstrument.description}</h6>
                  {/* <h6><strong>Student ID:</strong> {singleInstrument.studentId}</h6> */}
        <span><button className="btn btn-primary" onClick={this.editInstrument}>EDIT</button></span>
              </div>
            </div>
        </div>
    );
  }
}

export default withRouter(InstrumentDetail);
