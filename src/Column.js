import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';

setConfiguration({ breakpoints: [576, 768, 992, 1200], gridColumns: 16 });

class Column extends Component {
  render() {
    const { color } = this.props;
    return (
      <Row className="block" style={{ background: color}}>
         <Col className="sub-block" xs={16} sm={8} md={4} lg={4} >
          1
         </Col>
         <Col className="sub-block" xs={16} sm={8} md={4} lg={4} >
          2
         </Col>
         <Col className="sub-block" xs={16} sm={8} md={4} lg={4} >
          3
         </Col>
         <Col className="sub-block" xs={16} sm={8} md={4} lg={4} >
          4
         </Col>
      </Row>
    );
  }
}


export default Column;
