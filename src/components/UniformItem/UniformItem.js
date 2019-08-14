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
      <div className="uniform-div animated slideInUp">
        <Row>
          <Col className="col-sm-4 mt-2">
            <h2>{uniform.studentId}</h2>
          </Col>
          <Col className="col-sm-4 mt-2">
            <h2 onClick={this.uniformClick}>{uniform.size}</h2>
          </Col>
          <Col className="col-sm-4 mt-2">
            <h3><button className="btn btn-danger" onClick={this.deleteUniform}><i class="far fa-trash-alt fa-2x"></i></button></h3>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(UniformItem);
