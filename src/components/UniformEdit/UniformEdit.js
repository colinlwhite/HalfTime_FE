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
import { withRouter } from 'react-router-dom';
import uniformRequests from '../../helpers/data/uniformRequests';
import './UniformEdit.scss';

class UniformEdit extends React.Component {
  state = {
    newUniform: {},
  }

  formSubmitUniformEdit = (newUniform) => {
    const uniformId = this.props.match.params.id;
    uniformRequests.updateUniform(uniformId, newUniform)
      .then(() => {
        this.props.history.push('/uniforms');
      });
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempUniform = { ...this.state.newUniform };
    tempUniform[name] = e.target.value;
    this.setState({ newUniform: tempUniform });
  }

  formFieldNumberState = (name, e) => {
    e.preventDefault();
    const tempUniform = { ...this.state.newUniform };
    tempUniform[name] = e.target.value * 1;
    this.setState({ newUniform: tempUniform });
  }

  conditionChange = e => this.formFieldStringState('condition', e);

  sizeChange = e => this.formFieldStringState('size', e);

  studentIdChange = e => this.formFieldNumberState('studentId', e);

  formSubmit = (e) => {
    e.preventDefault();
    const myUniform = { ...this.state.newUniform };
    this.formSubmitUniformEdit(myUniform);
  }

  componentDidMount() {
    const uniformId = this.props.match.params.id;
    uniformRequests.getSingleUniform(uniformId)
      .then((uniform) => {
        this.setState({ newUniform: uniform });
      })
      .catch(err => console.error('error with single uniform', err));
  }

  render() {
    const { newUniform } = this.state;
    return (
      <div className="listing-form col">
        <h1>Edit Uniform</h1>
        <form onSubmit={this.formSubmit} autoComplete="off" className="add-edit-form">
        <FormGroup className="form-group">
            <Label htmlFor="condition"><strong>Condition</strong></Label>
            <Input type="select" onChange={this.conditionChange} value={newUniform.condition}>
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

          <FormGroup className="form-group">
            <Label htmlFor="size"><strong>Size</strong></Label>
            <Input type="select" onChange={this.sizeChange} value={newUniform.size}>
              <option>Extra Small</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Extra Large</option>
              <option>Double Extra Large</option>
              <option>Triple Extra Large</option>
            </Input>
          </FormGroup>

          <div className="form-group">
            <label htmlFor="studentId"><strong>Student ID</strong></label>
            <input
              type="number"
              className="form-control"
              id="studentId"
              aria-describedby="studentId"
              placeholder="Student ID"
              value={newUniform.studentId}
              onChange={this.studentIdChange}
            />
          </div>

          <button className="btn btn-light">SAVE</button>
        </form>
      </div>
    );
  }
}

export default withRouter(UniformEdit);
