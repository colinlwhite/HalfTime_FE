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
        <div class="card mx-auto mt-4 detail-card" style={{ width: '35%' }}>
        <div class="card-body">
        <h5 class="card-title">Details</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <h3>{singleInstrument.id}</h3>
        <h3>{singleInstrument.name}</h3>
        <h3>{singleInstrument.brand}</h3>
        <h3>{singleInstrument.modelNumber}</h3>
        <h3>{singleInstrument.category}</h3>
        <h3>{singleInstrument.condition}</h3>
        <h3>{singleInstrument.description}</h3>
        <h3>{singleInstrument.studentId}</h3>
        <span><button className="btn btn-primary" onClick={this.editInstrument}>EDIT</button></span>
  </div>
</div>
      </div>
    );
  }
}

export default withRouter(InstrumentDetail);
