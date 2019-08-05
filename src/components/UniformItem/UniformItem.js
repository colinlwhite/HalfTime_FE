import React from 'react';
import { withRouter } from 'react-router-dom';
import './UniformItem.scss';

class UniformItem extends React.Component {
  deleteUniform = (e) => {
    e.preventDefault();
    const { deleteSingleUniform, uniform } = this.props;
    deleteSingleUniform(uniform.id);
  };

  uniformClick = () => {
    const { uniform, onSelect } = this.props;
    onSelect(uniform.id);
  };

  render() {
    const { uniform } = this.props;
    return (
      <div className="uniform-div">
        <h2 onClick={this.uniformClick}>{uniform.studentId} {uniform.size}</h2>
        <span><button className="btn btn-danger" onClick={this.deleteUniform}>DELETE</button></span>
      </div>
    );
  }
}

export default withRouter(UniformItem);
