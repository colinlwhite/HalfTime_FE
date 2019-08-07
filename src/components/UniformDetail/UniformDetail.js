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

        <div class="card mx-auto mt-4 detail-card" style={{ width: '35%' }}>
        <div class="card-body">
        <h5 class="card-title">Details</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <h3>{singleUniform.id}</h3>
        <h3>{singleUniform.size}</h3>
        <h3>{singleUniform.condition}</h3>
        <h3>{singleUniform.studentId}</h3>
        <span><button className="btn btn-primary" onClick={this.editUniform}>EDIT</button></span>
        </div>
        </div>


      </div>
    );
  }
}

export default withRouter(UniformDetail);
