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
import './InstrumentAdd.scss';
import instrumentRequests from '../../helpers/data/instrumentRequests';

const defaultInstrument = {
  brand: '',
  category: '',
  condition: '',
  description: '',
  id: 0,
  modelNumber: '',
  name: '',
  studentId: 0,
};

class InstrumentAdd extends React.Component {
    state = {
      newInstrument: defaultInstrument,
    }

    formSubmitInstrument = (newInstrument) => {
      instrumentRequests.createInstrument(newInstrument)
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
      this.formSubmitInstrument(myInstrument);
    }

    render() {
      const { newInstrument } = this.state;
      return (
            <div className="listing-form col">
                <h1>Add Instrument</h1>
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

<FormGroup className="form-group">
    <Label htmlFor="category">Category:</Label>
      <Input type="select" onChange={this.categoryChange} value={newInstrument.category}>
      <option>Auxiliary</option>
      <option>Brass</option>
      <option>Drumline</option>
      <option>Front Ensemble</option>
      <option>Woodwinds</option>
      </Input>
  </FormGroup>

<FormGroup className="form-group">
    <Label htmlFor="condition">Condition:</Label>
      <Input type="select" onChange={this.conditionChange} value={newInstrument.condition}>
      <option>Just Got It</option>
      <option>Just Like New</option>
      <option>Excellent</option>
      <option>Very Good</option>
      <option>Good</option>
      <option>Fair</option>
      <option>Poor</option>
      <option>Doesn't Work</option>
      </Input>
  </FormGroup>

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
    placeholder=""
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

export default withRouter(InstrumentAdd);
