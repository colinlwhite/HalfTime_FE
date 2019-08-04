import React from 'react';
import { withRouter } from 'react-router-dom';
import instrumentRequests from '../../helpers/data/instrumentRequests';
import './InstrumentEdit.scss';

class InstrumentEdit extends React.Component {
    state = {
      newInstrument: {},
    }

    formSubmitInstrumentEdit = (newInstrument) => {
      const instrumentId = this.props.match.params.id;
      instrumentRequests.updateInstrument(instrumentId, newInstrument)
        .then(() => {
          this.props.history.push('/instruments');
        });
    }

    formFieldStringState = (name, e) => {
      e.preventDefault();
      const tempInstrument = { ...this.state.newInstrument };
      tempInstrument[name] = e.target.value;
      this.setState({ newInstrument: tempInstrument });
    }

    formFieldNumberState = (name, e) => {
      e.preventDefault();
      const tempInstrument = { ...this.state.newInstrument };
      tempInstrument[name] = e.target.value * 1;
      this.setState({ newInstrument: tempInstrument });
    }

    brandChange = e => this.formFieldStringState('brand', e);

    categoryChange = e => this.formFieldStringState('category', e);

    conditionChange = e => this.formFieldStringState('condition', e);

    descriptionChange = e => this.formFieldStringState('description', e);

    idChange = e => this.formFieldNumberState('id', e);

    modelNumberChange = e => this.formFieldStringState('modelNumber', e);

    nameChange = e => this.formFieldStringState('name', e);

    studentIdChange = e => this.formFieldNumberState('studentId', e);

    formSubmit = (e) => {
      e.preventDefault();
      const myInstrument = { ...this.state.newInstrument };
      this.formSubmitInstrumentEdit(myInstrument);
    }

    componentDidMount() {
      const instrumentId = this.props.match.params.id;
      instrumentRequests.getSingleInstrument(instrumentId)
        .then((instrument) => {
          this.setState({ newInstrument: instrument });
        })
        .catch(err => console.error('error with single instrument', err));
    }

    render() {
      const { newInstrument } = this.state;
      return (
            <div className="listing-form col">
                <h1>Edit Instrument</h1>
                <form onSubmit={this.formSubmit} autoComplete="off">
                <div className="form-group">
  <label htmlFor="brand">Brand:</label>
  <input
    type="text"
    className="form-control"
    id="brand"
    aria-describedby="brand"
    placeholder="brand"
    value={newInstrument.brand}
    onChange={this.brandChange}
  />
</div>

<div className="form-group">
  <label htmlFor="category">Category:</label>
  <input
    type="text"
    className="form-control"
    id="category"
    aria-describedby="category"
    placeholder="category"
    value={newInstrument.category}
    onChange={this.categoryChange}
  />
</div>

<div className="form-group">
  <label htmlFor="condition">Condition:</label>
  <input
    type="text"
    className="form-control"
    id="condition"
    aria-describedby="condition"
    placeholder="condition"
    value={newInstrument.condition}
    onChange={this.conditionChange}
  />
</div>

<div className="form-group">
  <label htmlFor="description">Description:</label>
  <input
    type="text"
    className="form-control"
    id="description"
    aria-describedby="description"
    placeholder="description"
    value={newInstrument.description}
    onChange={this.descriptionChange}
  />
</div>

<div className="form-group">
  <label htmlFor="state">ID:</label>
  <input
    type="number"
    className="form-control"
    id="id"
    aria-describedby="id"
    placeholder="ID"
    value={newInstrument.id}
    onChange={this.idChange}
  />
</div>

<div className="form-group">
  <label htmlFor="modelNumber">Model Number:</label>
  <input
    type="text"
    className="form-control"
    id="modelNumber"
    aria-describedby="modelNumber"
    placeholder="Model Number"
    value={newInstrument.modelNumber}
    onChange={this.modelNumberChange}
  />
</div>

<div className="form-group">
  <label htmlFor="name">Name:</label>
  <input
    type="text"
    className="form-control"
    id="name"
    aria-describedby="Name"
    placeholder="Name"
    value={newInstrument.name}
    onChange={this.nameChange}
  />
</div>

<div className="form-group">
  <label htmlFor="studentId">Student ID:</label>
  <input
    type="number"
    className="form-control"
    id="studentId"
    aria-describedby="studentId"
    placeholder="0"
    value={newInstrument.studentId}
    onChange={this.studentIdChange}
  />
</div>
<button className="btn btn-light">SAVE</button>

                </form>
            </div>
      );
    }
}

export default withRouter(InstrumentEdit);
