import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

class About extends Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
          <h1 className="display-3">About</h1>
          <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.In egestas tellus justo, et tristique lacus volutpat sed.Maecenas gravida sapien non lectus sodales, at tristique purus malesuada.</p>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default About;