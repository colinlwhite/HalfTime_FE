import React from 'react';
import { withRouter } from 'react-router-dom';
import uniformRequests from '../../helpers/data/uniformRequests';
import './UniformDetail.scss';

class UniformDetail extends React.Component {
  state = {
    singleUniform: {},
  };

  editUniform = (e) => {
    e.preventDefault();
    const { singleUniform } = this.state;
    this.props.history.push(`/uniformedit/${singleUniform.id}`);
  }

  backToUniformsView = (e) => {
    this.props.history.push('/uniforms');
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    uniformRequests.getSingleUniform(id).then((singleUniform) => {
      this.setState({ singleUniform });
    });
  }

  render() {
    const { singleUniform } = this.state;
    return (
      <div>
        <h1>Uniform Details</h1>
        <button onClick={this.backToUniformsView}>BACK TO UNIFORMS</button>
        <h2>{singleUniform.condition}</h2>
        <h2>{singleUniform.size}</h2>
        <span><button className="btn btn-primary" onClick={this.editUniform}>EDIT</button></span>
      </div>
    );
  }
}

export default withRouter(UniformDetail);
