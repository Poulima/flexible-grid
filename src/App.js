import React, { Component } from 'react';
import { Container, Row } from 'react-grid-system';
import Column from './Column';
import { FlexibleGrid } from './style';

class App extends Component {
  render() {
    return (
      <FlexibleGrid>
      <h3 className="header"> Flexible Grid</h3>
      <Container className="grid-container">
        <Row className="parent-block" >
          <Column color="#e08888" />
          <Column color="#cbe9f5" />
          <Column color="#ceeace" />
          <Column color="#fff4bf" />
        </Row>
      </Container>
      </FlexibleGrid>
    );
  }
}

export default App;
