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
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';
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
        <h1 className="animated slideInDown">Uniforms</h1>
        <NavLink className="animated fadeIn"
        tag={RRNavLink} to='/uniformadd'><i class="fas fa-plus-circle fa-3x"></i>
        </NavLink>
        <div className="uniform-table-header">
          <Row>
            <Col className="col-sm-4 mt-2">
              <h3><strong>ID#</strong></h3>
            </Col>
            <Col className="col-sm-4 mt-2">
              <h3><strong>SIZE</strong></h3>
            </Col>
            <Col className="col-sm-4 mt-2">
              <h3><strong>ACTION</strong></h3>
            </Col>
          </Row>
          </div>
        <h3>{uniformItemComponents}</h3>
      </div>
    );
  }
}

export default withRouter(Uniforms);
