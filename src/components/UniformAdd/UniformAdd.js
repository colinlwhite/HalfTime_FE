import React from 'react';
import { withRouter } from 'react-router-dom';
import './UniformAdd.scss';
import uniformRequests from '../../helpers/data/uniformRequests';

const defaultUniform = {
  condition: '',
  size: '',
  studentId: 0,
};

class UniformAdd extends React.Component {
    state = {
      newUniform: defaultUniform,
    }

    formSubmitUniform = (newUniform) => {
      uniformRequests.createUniform(newUniform)
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
      this.formSubmitUniform(myUniform);
    }

    render() {
      const { newUniform } = this.state;
      return (
            <div className="listing-form col">
                <h1>Add Uniform</h1>
                <form onSubmit={this.formSubmit} autoComplete="off" className="add-edit-form">

<div className="form-group">
  <label htmlFor="condition">Condition:</label>
  <input
    type="text"
    className="form-control"
    id="condition"
    aria-describedby="condition"
    placeholder="Condition"
    value={newUniform.condition}
    onChange={this.conditionChange}
  />
</div>

<div className="form-group">
  <label htmlFor="size">Size:</label>
  <input
    type="text"
    className="form-control"
    id="size"
    aria-describedby="size"
    placeholder="Size"
    value={newUniform.size}
    onChange={this.sizeChange}
  />
</div>

<div className="form-group">
  <label htmlFor="studentId">Student ID:</label>
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

export default withRouter(UniformAdd);
