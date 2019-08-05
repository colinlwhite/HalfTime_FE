import React from 'react';
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
                <form onSubmit={this.formSubmit} autoComplete="off">
                <div className="form-group">
  <label htmlFor="condition">Condition:</label>
  <input
    type="text"
    className="form-control"
    id="condition"
    aria-describedby="condition"
    placeholder="condition"
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
    placeholder="size"
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

export default withRouter(UniformEdit);
