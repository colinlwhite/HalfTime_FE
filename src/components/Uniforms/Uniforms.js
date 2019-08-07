import React from 'react';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import uniformRequests from '../../helpers/data/uniformRequests';
import UniformItem from '../UniformItem/UniformItem';
import './Uniforms.scss';

class Uniforms extends React.Component {
  state = {
    uniforms: [],
  }

  componentDidMount() {
    uniformRequests.getUniforms()
      .then((uniforms) => {
        this.setState({
          uniforms,
        });
      })
      .catch(err => ('err'));
  }

  deleteOneUniform = (uniformId) => {
    uniformRequests.deleteUniform(uniformId)
      .then(() => {
        uniformRequests.getUniforms()
          .then((uniforms) => {
            this.setState({ uniforms });
          });
      })
      .catch(err => console.error('error in deleting', err));
  }

  onSelect = (id) => {
    this.props.history.push(`/uniform/${id}`);
  };

  render() {
    const { uniforms } = this.state;
    const uniformItemComponents = uniforms.map(uniform => (
      <UniformItem
      key={uniform.id}
      uniform={uniform}
      deleteSingleUniform={this.deleteOneUniform}
      onSelect={this.onSelect}
      />
    ));
    return (
      <div>
        <h1>Uniforms</h1>
        <NavLink tag={RRNavLink} to='/uniformadd'><i class="fas fa-plus-circle fa-3x"></i></NavLink>
        <h3>{uniformItemComponents}</h3>
      </div>
    );
  }
}

export default withRouter(Uniforms);
