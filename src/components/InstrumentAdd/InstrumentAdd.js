import React from 'react';
import {
  Row,
  Col,
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
        <form onSubmit={this.formSubmit} autoComplete="off" className="add-edit-form">

          <Row>
            <Col className="col-md-6">
              <div className="form-group">
                <label htmlFor="brand"><strong>Brand</strong></label>
                <input
                  type="text"
                  className="form-control"
                  id="brand"
                  aria-describedby="brand"
                  placeholder="Brand"
                  value={newInstrument.brand}
                  onChange={this.brandChange}
                />
              </div>
            </Col>
            <Col className="col-md-6">
              <FormGroup className="form-group">
                <Label htmlFor="category"><strong>Category</strong></Label>
                <Input type="select" onChange={this.categoryChange} value={newInstrument.category}>
                  <option>Auxiliary</option>
                  <option>Brass</option>
                  <option>Drumline</option>
                  <option>Front Ensemble</option>
                  <option>Woodwinds</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6">
              <FormGroup className="form-group">
                <Label htmlFor="condition"><strong>Condition</strong></Label>
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
            </Col>
            <Col className="col-md-6">
              <div className="form-group">
                <label htmlFor="description"><strong>Description</strong></label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  aria-describedby="description"
                  placeholder="Description"
                  value={newInstrument.description}
                  onChange={this.descriptionChange}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6">
              <div className="form-group">
                <label htmlFor="state"><strong>ID</strong></label>
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
            </Col>
            <Col className="col-md-6">
              <div className="form-group">
                <label htmlFor="modelNumber"><strong>Model Number</strong></label>
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
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6">
              <div className="form-group">
                <label htmlFor="name"><strong>Name</strong></label>
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
            </Col>
            <Col className="col-md-6">
              <div className="form-group">
                <label htmlFor="studentId"><strong>Student ID</strong></label>
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
            </Col>
          </Row>
          <button className="btn btn-success"><i class="far fa-check-square fa-2x"></i></button>
        </form>
      </div>
    );
  }
}

export default withRouter(InstrumentAdd);
